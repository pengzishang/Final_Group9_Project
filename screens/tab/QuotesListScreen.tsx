// @flow
import * as React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import SearchBar from "../../components/SearchBar.tsx";
import {Cell} from "../../components/QuoteCell.tsx";
import {sampleQuotes} from "../../database/sampleData.ts";
import {Quote} from "../../model/Quote.ts";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {QuoteStackParamList} from "../../Navigator/QuoteStackNavigator.tsx";

type Props = NativeStackScreenProps<QuoteStackParamList, "List">;

export const QuotesListScreen = (_props: Props) => {

    function renderItem(info: { item: Quote, index: number }) {
        return Cell({
            item: info.item,
            onDetail: () => {
                _props.navigation.navigate("Detail", {
                    // item: info.item
                })
            },
            onFavorite: () => {

            }
        })
    }

    function keyExtractor(item: Quote): string {
        return item.id.toString()
    }

    return (
        <View style={styles.container}>
            <SearchBar title={"Quotes"}/>
            <FlatList data={sampleQuotes} renderItem={renderItem} keyExtractor={keyExtractor}/>
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
