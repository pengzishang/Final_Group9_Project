import React from 'react';
import {Pressable, StyleSheet, Text} from "react-native";

type Props = {
    title: string
    isPrimary: boolean
    onPress: () => void
}

// the button in the UI
function StyledButton({isPrimary, title, onPress}: Props) {
    return (
        <Pressable
            style={({pressed}) => [
                isPrimary ? styles.buttonPrimary : styles.buttonSecondary,
                pressed && styles.buttonPressed,
            ]}
            onPress={onPress}
        >
            <Text style={isPrimary ? styles.buttonPrimaryText : styles.buttonSecondaryText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: '#4B6FFF',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonSecondaryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    buttonPressed: {
        opacity: 0.5,
    },

    buttonSecondary: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: '#E8EBF2',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonPrimaryText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
})

export default StyledButton;
