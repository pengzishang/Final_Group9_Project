import {StyleSheet, View} from "react-native";
import {EditTextField} from "../../components/EditTextField.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {QuoteStackParamList} from "../../Navigator/QuoteStackNavigator.tsx";
import StyledButton from "../../components/StyledButton.tsx";
import {SafeAreaView} from "react-native-safe-area-context";
import {TextSwitch} from "../../components/TextSwitch.tsx";
import {useState} from "react";
import {editQuote} from "../../database/LocalDbManager.ts";

type Props = NativeStackScreenProps<QuoteStackParamList, "Detail">;

export const QuoteDetailScreen = ({route:{params:{item}}, navigation}: Props) => {
    const [text, setText] = useState<string>(item.text)
    const [author, setAuthor] = useState<string>(item.author)
    const [favorite, setFavorite] = useState<boolean>(item.isFavorite)
    return (
        <SafeAreaView style={styles.root}>
            <EditTextField title={"Quote"} content={text} onChangeText={setText}/>
            <EditTextField title={"Author"} content={author} onChangeText={setAuthor}/>
            <TextSwitch value={favorite} label={"Favorite"} onValueChange={setFavorite} />

            <View style={styles.spacer}/>
            <StyledButton title={"Save"} isPrimary={true} onPress={() => {
                editQuote(text,author,favorite,item.id)
                navigation.goBack()
            }}/>
            <StyledButton title={"Cancel"} isPrimary={false} onPress={() => {
                navigation.goBack()
            }}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    spacer: {
        flex: 1
    },
    switch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16,
    },
    switchText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
