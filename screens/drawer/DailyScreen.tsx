// @flow

import {Alert, StyleSheet, Text, View} from "react-native";
import StyledButton from "../../components/StyledButton.tsx";
import {useState} from "react";
import {editQuote, fetchRandomQuotes} from "../../database/LocalDbManager.ts";
import {Quote} from "../../model/Quote.ts";

type Props = {};
export const DailyScreen = (_props: Props) => {
    const [quote, setQuote] = useState<Quote>(fetchRandomQuotes)

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Quote of the day:</Text>
                <Text style={styles.content}>{quote.text}</Text>
            </View>
            <StyledButton title={"Next Quote"} isPrimary={true} onPress={() => {
                setQuote(fetchRandomQuotes)
            }}/>

            <StyledButton title={"Save to My Favorite"} isPrimary={false} onPress={() => {
                editQuote(quote.text, quote.author, !quote.isFavorite, quote.id)
                Alert.alert("Add to favorite","Success")
            }}/>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    top: {
        margin: 30,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#CAA996',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: "center",
        marginVertical: 20
    },
});
