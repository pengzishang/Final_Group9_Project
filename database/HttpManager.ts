import {Quote} from "../model/Quote.ts";

// For daily quote. I add it at last when checking the instruction and I miss it.
export async function fetchRandom(): Promise<Quote> {
    try {
        let response = await fetch('http://api.quotable.io/random', {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error("request fail")
        }
        const data = await response.json()
        return {
            id: 0,
            text: data.content,
            author: data.author,
            source: 'Internet',
            isFavorite: false
        }
    } catch(error) {
        console.log('[fetchRandom] error =', error);
        return {
            id: 0,
            text: "This a quote, you desire have a word",
            author: "Me",
            source: 'Internet',
            isFavorite: false
        }
    }
}
