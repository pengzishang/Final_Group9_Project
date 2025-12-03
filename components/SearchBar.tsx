import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

type Props = {
    title: string
}

// search bar component, give up at the end, no time to do more
function SearchBar(_props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput placeholder={"Search"} style={styles.text} />
                <MaterialDesignIcons name={"search-web"} size={20} color={"#111"} style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#E8EBF2',
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    text: {
        flex: 1,
        color: '#111', // 显式颜色，确保可见
        fontSize: 16,
    },
    icon: {
        marginHorizontal: 8,
    }
});

export default SearchBar;
