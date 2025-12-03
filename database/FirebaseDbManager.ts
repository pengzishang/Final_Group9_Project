import {initializeApp} from "@firebase/app";
import {getDatabase, set} from "@firebase/database";
import {firebaseConfig} from "../util/firebaseConfig.ts";
import {get, ref} from "firebase/database";
import {Quote} from "../model/Quote.ts";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database instance
const db = getDatabase(app);


export const fetchAllFirebaseData = (filterByFavorite = false): Promise<Quote[]> => {
    const items = ref(db, "/")
    return get(items).then((snapshot) => {
        if (snapshot.exists()) {
            const snapshotArray: [any] = snapshot.val() ?? {};
            let allQuotes = snapshotArray.map((item: Quote) => {
                return {
                    id: item.id,
                    text: item.text,
                    author: item.author,
                    source: item.source,
                    isFavorite: item.isFavorite
                }
            })
            if (filterByFavorite) {
                return allQuotes.filter(item => item.isFavorite)
            } else {
                return allQuotes
            }
        }
        return []
    })
};

// trying to use aync way
export const editFirebaseQuote = async (id: number, text: string, author: string, isFavorite: boolean): Promise<void> => {
    const root = ref(db, "/")
    const snapshot = await get(root)
    if (!snapshot.exists()) {
        throw new Error("snapshot not exist")
    }
    const snapshotArray: [any] = snapshot.val() ?? [];
    let targetIndex = snapshotArray.findIndex(value => {
        return value.id === id
    })
    if (targetIndex == null) {
        throw new Error("no item with this id")
    }

    snapshotArray[targetIndex] = {
        ...snapshotArray[targetIndex],
        text,
        author,
        isFavorite
    }
    await set(root, snapshotArray)
}
