import {StyleSheet, Switch, Text, View} from "react-native";
import {EditTextField} from "../components/EditTextField.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {QuoteStackParamList} from "../Navigator/QuoteStackNavigator.tsx";
import StyledButton from "../components/StyledButton.tsx";
import {SafeAreaView} from "react-native-safe-area-context";

type Props = NativeStackScreenProps<QuoteStackParamList, "Detail">;

export const QuoteDetailScreen = (_props: Props) => {
    return (
        <SafeAreaView style={styles.root}>
            <EditTextField title={"Quote"} content={undefined} onChangeText={(text: string) => {
                console.log(text)
            }}/>
            <EditTextField title={"Author"} content={undefined} onChangeText={(text: string) => {
                console.log(text)
            }}/>
            <EditTextField title={"Source"} content={undefined} onChangeText={(text: string) => {
                console.log(text)
            }}/>
            <View style={styles.switch}>
                <Text style={styles.switchText}>
                    Favorite
                </Text>
                <Switch/>
            </View>

            <View style={styles.spacer}/>
            <StyledButton title={"Save"} isPrimary={true} onPress={() => {

            }}/>
            <StyledButton title={"Delete"} isPrimary={false} onPress={() => {

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
