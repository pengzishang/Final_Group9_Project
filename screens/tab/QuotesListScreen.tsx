import {Alert, FlatList, StyleSheet, View} from "react-native";
import SearchBar from "../../components/SearchBar.tsx";
import {Cell} from "../../components/QuoteCell.tsx";
import {Quote} from "../../model/Quote.ts";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {QuoteStackParamList} from "../../Navigator/QuoteStackNavigator.tsx";
import {editLocalQuote, fetchAllLocalQuotes} from "../../database/LocalDbManager.ts";
import {useCallback, useEffect, useState} from "react";
import {editFirebaseQuote, fetchAllFirebaseData} from "../../database/FirebaseDbManager.ts";

type Props = NativeStackScreenProps<QuoteStackParamList, "List">;

export const QuotesListScreen = (_props: Props) => {
    const isFirebase = true
    const [quoteData, setQuoteData] = useState<Quote[]>([])
    const [refreshing, setRefreshing] = useState(false)

    const onRefreshData = useCallback(() => {
        setRefreshing(true);
        if (isFirebase) {
            fetchAllFirebaseData()
                .then(values => {
                    setQuoteData(values);
                })
                .catch(reason => {
                    Alert.alert('yyyy', String(reason));
                })
                .finally(() => {
                    setRefreshing(false);
                });
        } else {
            try {
                const values = fetchAllLocalQuotes();
                setQuoteData(values);
            } catch (err) {
                Alert.alert('xxx', String(err));
            } finally {
                setRefreshing(false);
            }
        }
    }, [isFirebase]);


    const editFavorite = (item: Quote) => {
        setRefreshing(true)
        if (!isFirebase) {
            editLocalQuote(item.text, item.author, !item.isFavorite, item.id)
            onRefreshData()
        } else {
            editFirebaseQuote(item.id, item.text, item.author, !item.isFavorite).then(() => {
                onRefreshData()
            }).catch((reason) => {
                Alert.alert("Warning", reason)
            })
        }
    }

    useEffect(() => {
        onRefreshData();
    }, [onRefreshData]);


    function renderItem(info: { item: Quote, index: number }) {
        return Cell({
            item: info.item,
            onDetail: () => {
                Alert.alert("eeee", `${info.item.isFavorite}`)
                _props.navigation.navigate("Detail", {
                    item: info.item, onSave: () => {
                        onRefreshData()
                    }
                })
            },
            onFavorite: () => {
                editFavorite(info.item)
            }
        })
    }

    function keyExtractor(item: Quote): string {
        return item.id.toString()
    }

    return (
        <View style={styles.container}>
            <SearchBar title={"Quotes"}/>
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
