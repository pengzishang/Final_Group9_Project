import React from 'react';
import {StyleSheet, View} from "react-native";
import {TextSwitch} from "../../components/TextSwitch.tsx";

export function SettingScreen() {
    return (
        <View style={styles.container}>
            <TextSwitch label={"Local SQLite/Firebase Database"} value={true} onValueChange={(value)=>{
                console.log(value)
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
