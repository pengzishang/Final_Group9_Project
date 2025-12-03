import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

type Prop = {
    title: string
    content: string | undefined
    onChangeText: (text: string) => void
}

// use in detail
export function EditTextField(_props: Prop) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{_props.title}</Text>
            <TextInput style={styles.input} value={_props.content} onChangeText={_props.onChangeText} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginVertical: 12,
        marginHorizontal: 16
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
    },
});
