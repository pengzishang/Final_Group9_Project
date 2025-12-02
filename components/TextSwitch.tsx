import {StyleSheet, Switch, Text, View} from "react-native";


export function TextSwitch(props: {
    label: string,
    value: boolean,
    onValueChange: (value: boolean) => void,
}) {
    return (
        <View style={styles.switch}>
            <Text style={styles.switchText}>{props.label}</Text>
            <Switch
                value={props.value}
                onValueChange={props.onValueChange}
            />
        </View>
    );
}


const styles = StyleSheet.create({
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
