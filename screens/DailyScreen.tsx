// @flow

import {Pressable, StyleSheet, Text, View} from "react-native";
import StyledButton from "../components/StyledButton.tsx";

type Props = {};
export const DailyScreen = (_props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Quote of the day:</Text>
                <Text>Quote of the day</Text>
            </View>
            <StyledButton title={"Next Quote"} isPrimary={true} onPress={() => {
                // TODO: Next quote handler
            }} />

            <StyledButton title={"Save to My Quotes"} isPrimary={false} onPress={() => {
                // TODO: Next quote handler
            }} />

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
        padding: 10,
        backgroundColor: '#CAA996',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonNext: {
        marginHorizontal: 30,
        marginTop: 12,
        backgroundColor: '#4B6FFF',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.85,
    },
    buttonNextText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    buttonFavorite: {
        marginHorizontal: 30,
        marginTop: 12,
        backgroundColor: '#E8EBF2',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonFavoriteText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 16,
    },
});
