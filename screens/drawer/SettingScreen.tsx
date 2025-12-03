import React from 'react';
import {StyleSheet, View} from "react-native";
import {TextSwitch} from "../../components/TextSwitch.tsx";
import {isFirebaseStore} from "../../database/ZustandStorageManager.ts";

// sqlite mode, get list from sqlite, save favorite to sqlite
// firebase mode, get list from firebase, save favorite to firebase

// the third screen in the drawer
export function SettingScreen() {
    const {setFirebase, isFirebase} = isFirebaseStore()
    return (
        <View style={styles.container}>
            <TextSwitch label={"Local SQLite/Firebase Database"} value={isFirebase} onValueChange={(value)=>{
                setFirebase(value)
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
// sqlite模式, 从sqlite拿数据, favorite存入本地sqlite
// firebase模式, 从firebase拿数据, favorite存入firebase
