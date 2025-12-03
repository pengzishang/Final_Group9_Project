import {create} from "zustand/react";

type isFirebaseState = {
    isFirebase: boolean;
    setFirebase: (isFirebase: boolean) => void;
}

export const isFirebaseStore = create<isFirebaseState>(
    function (set) {
        return ({
            isFirebase: false,
            setFirebase: function (isFirebase) {
                return set(function (state) {
                    return {isFirebase};
                })
            }
        });
    }
);
