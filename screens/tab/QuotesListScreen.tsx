// @flow
import * as React from 'react';
import {Alert, FlatList, StyleSheet, View} from "react-native";
import SearchBar from "../../components/SearchBar.tsx";
import {Cell} from "../../components/QuoteCell.tsx";
import {Quote} from "../../model/Quote.ts";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {QuoteStackParamList} from "../../Navigator/QuoteStackNavigator.tsx";
import {editQuote, fetchAllQuotes} from "../../database/LocalDbManager.ts";
import {useState} from "react";

type Props = NativeStackScreenProps<QuoteStackParamList, "List">;

export const QuotesListScreen = (_props: Props) => {

    const [localData, setLocalData] = useState<Quote[]>(fetchAllQuotes())
    const [refreshing, setRefreshing] = useState(false)

    function renderItem(info: { item: Quote, index: number }) {
        return Cell({
            item: info.item,
            onDetail: () => {
                Alert.alert("eeee", `${info.item.isFavorite}`)
                _props.navigation.navigate("Detail", {
                    item: info.item, onSave: () => {
                        setLocalData(fetchAllQuotes)
                    }
                })
            },
            onFavorite: () => {
                editQuote(info.item.text,info.item.author,!info.item.isFavorite, info.item.id)
                onRefresh()
            }
        })
    }

    function keyExtractor(item: Quote): string {
        return item.id.toString()
    }

    const onRefresh = () => {
        setRefreshing(true)
        setLocalData(fetchAllQuotes)
        setRefreshing(false)
    };

    return (
        <View style={styles.container}>
            <SearchBar title={"Quotes"}/>
            <FlatList data={localData} renderItem={renderItem} keyExtractor={keyExtractor} refreshing={refreshing} onRefresh={onRefresh}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    },
});
