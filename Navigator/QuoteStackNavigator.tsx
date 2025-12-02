import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {QuotesListScreen} from "../screens/tab/QuotesListScreen.tsx";
import {QuoteDetailScreen} from "../screens/tab/QuoteDetailScreen.tsx";
import {FavoritesScreen} from "../screens/tab/FavoritesScreen.tsx";

export type QuoteStackParamList = {
    List: undefined;
    Detail: {
        // item: Quote;
    };
    Favorites: undefined;
};

export function QuoteStackNavigator() {

    const Stack = createNativeStackNavigator<QuoteStackParamList>()

    return (
        <Stack.Navigator initialRouteName={"List"}>
            <Stack.Screen name="List" component={QuotesListScreen}/>
            <Stack.Screen name="Detail" component={QuoteDetailScreen}/>
        </Stack.Navigator>
    );
}

export function FavoriteStackNavigator() {

    const Stack = createNativeStackNavigator<QuoteStackParamList>()
    return (
        <Stack.Navigator initialRouteName={"Favorites"}>
            <Stack.Screen name="Favorites" component={FavoritesScreen}/>
            <Stack.Screen name="Detail" component={QuoteDetailScreen}/>
        </Stack.Navigator>
    );
}
