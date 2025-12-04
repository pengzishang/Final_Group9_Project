// @flow

import {Alert, Image, StyleSheet, Text, View} from "react-native";
import StyledButton from "../../components/StyledButton.tsx";
import {useState} from "react";
import {fetchRandomLocalQuotes} from "../../database/LocalDbManager.ts";
import {Quote} from "../../model/Quote.ts";
import {fetchRandom} from "../../database/HttpManager.ts";

type Props = {};


// the first screen in the drawer
export const DailyScreen = (_props: Props) => {
    const [quote, setQuote] = useState<Quote>(fetchRandomLocalQuotes)

    return (
        <View style={styles.container}>

            <Image
                source={require("../../img/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.logoText}>This is Logo</Text>

            <View style={styles.top}>
                <Text style={styles.title}>Quote of the day:</Text>
                <Text style={styles.content}>{quote.text}</Text>
                <Text style={styles.author}>by {quote.author}</Text>
            </View>
            <StyledButton title={"Next Quote"} isPrimary={true} onPress={() => {
                fetchRandom().then((result) => {
                    setQuote(result)
                }).catch(() => {
                    Alert.alert("Warning", "something wrong")
                })
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
    author: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: "right",
        marginVertical: 20
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        borderRadius: 30,
        marginTop: 30,
        marginBottom: 10,
    },
    logoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: "center",
    }
});
