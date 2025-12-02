import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Design by Zishang Peng</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
