import {FlatList, StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {QuoteStackParamList} from "../../Navigator/QuoteStackNavigator.tsx";
import {Quote} from "../../model/Quote.ts";
import {Cell} from "../../components/QuoteCell.tsx";
import SearchBar from "../../components/SearchBar.tsx";
import {fetchAllFavoriteQuotes} from "../../database/LocalDbManager.ts";
import {useState} from "react";

type Props = NativeStackScreenProps<QuoteStackParamList, "Favorites">;

export const FavoritesScreen = (_props: Props) => {

    const [localFavoriteData, setLocalFavoriteData] = useState<Quote[]>(fetchAllFavoriteQuotes())
    const [refreshing, setRefreshing] = useState(false)

    function renderItem(info: { item: Quote, index: number }) {
        return Cell({
            item: info.item,
            onDetail: () => {
                _props.navigation.navigate("Detail", {
                    item: info.item, onSave: () => {
                        setLocalFavoriteData(fetchAllFavoriteQuotes)
                    }
                })
            },
            onFavorite: () => {

            }
        })
    }

    function keyExtractor(item: Quote): string {
        return item.id.toString()
    }

    const onRefresh = () => {
        setRefreshing(true)
        setLocalFavoriteData(fetchAllFavoriteQuotes)
        setRefreshing(false)
    };


    return (
        <View style={styles.container}>
            <SearchBar title={"Quotes"}/>
            <FlatList data={localFavoriteData} renderItem={renderItem} refreshing={refreshing} keyExtractor={keyExtractor} onRefresh={onRefresh} />
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
