import {Alert, FlatList, StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {QuoteStackParamList} from "../../Navigator/QuoteStackNavigator.tsx";
import {Quote} from "../../model/Quote.ts";
import {Cell} from "../../components/QuoteCell.tsx";

import {fetchAllLocalQuotes} from "../../database/LocalDbManager.ts";
import {useCallback, useEffect, useState} from "react";
import {editFirebaseQuote, fetchAllFirebaseData} from "../../database/FirebaseDbManager.ts";
import * as React from "react";
import {useIsFocused} from "@react-navigation/core";
import {isFirebaseStore} from "../../database/ZustandStorageManager.ts";

type Props = NativeStackScreenProps<QuoteStackParamList, "Favorites">;

export const FavoritesScreen = (_props: Props) => {

    const {isFirebase} = isFirebaseStore()
    const [quoteData, setQuoteData] = useState<Quote[]>([])
    const [refreshing, setRefreshing] = useState(false)
    const isFocused = useIsFocused();

    const onRefreshData = useCallback(() => {
        setRefreshing(true);
        if (isFirebase) {
            fetchAllFirebaseData(true)
                .then(values => {
                    setQuoteData(values);
                })
                .catch(() => {
                    Alert.alert('Warning', "Something wrong");
                })
                .finally(() => {
                    setRefreshing(false);
                });
        } else {
            try {
                const values = fetchAllLocalQuotes(true)
                setQuoteData(values);
            } catch {
                Alert.alert('Warning', "some thing wrong");
            } finally {
                setRefreshing(false);
            }
        }
    }, [isFirebase]);

    useEffect(() => {
        if (isFocused) {
            onRefreshData();
        }
    }, [onRefreshData, isFocused]);

    function renderItem(info: { item: Quote, index: number }) {
        return Cell({
            item: info.item,
            onDetail: () => {
                // Alert.alert("eeee", `${info.item.isFavorite}`)
                _props.navigation.navigate("Detail", {
                    item: info.item, onSave: () => {
                        onRefreshData()
                    }
                })
            },
            onFavorite: () => {
                editFirebaseQuote(info.item.id, info.item.text, info.item.author, !info.item.isFavorite)
                    .catch(() => {
                        Alert.alert("Warning", "something wrong")
                    })
            }
        })
    }

    function keyExtractor(item: Quote): string {
        return item.id.toString()
    }

    return (
        <View style={styles.container}>
            <FlatList data={quoteData} renderItem={renderItem} keyExtractor={keyExtractor} refreshing={refreshing}
                      onRefresh={onRefreshData}/>
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
