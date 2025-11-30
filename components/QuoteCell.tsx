import {Alert, Pressable, StyleSheet, Text, View} from "react-native";
import {Quote} from "../model/Quote.ts";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";


type Prop = {
    item: Quote
    onDetail: () => void
    onFavorite: () => void
}

export const Cell = (props: Prop) => {
    return (
        <View style={styles.cell}>
            <Pressable style={styles.content} onPress={props.onDetail}>
                <Text style={styles.text}>{props.item.text}</Text>
                <Text style={styles.author}>{props.item.author}</Text>
            </Pressable>
            <MaterialDesignIcons name={"star-outline"} size={24} color={"#111"} style={styles.icon} onPress={props.onFavorite} />
        </View>
    )
}


const styles = StyleSheet.create({
    cell: {
        flexDirection: "row",
        padding: 16,
        gap: 10,
        borderStyle: "dashed",
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 16,
    },
    author: {
        fontSize: 14,
        color: "gray",
    },
    content: {
        gap: 10,
        flex: 1
    },
    icon: {}
});
