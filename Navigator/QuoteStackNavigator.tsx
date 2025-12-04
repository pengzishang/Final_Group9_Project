import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {QuotesListScreen} from "../screens/tab/QuotesListScreen.tsx";
import {QuoteDetailScreen} from "../screens/tab/QuoteDetailScreen.tsx";
import {FavoritesScreen} from "../screens/tab/FavoritesScreen.tsx";
import {Quote} from "../model/Quote.ts";
import {isFirebaseStore} from "../database/ZustandStorageManager.ts";

export type QuoteStackParamList = {
    List: undefined;
    Detail: {
        item: Quote;
        onSave: () => void
    };
    Favorites: undefined;
};



// the second screen, for quote list
export function QuoteStackNavigator() {


    const {isFirebase} = isFirebaseStore()
    const Stack = createNativeStackNavigator<QuoteStackParamList>()

    return (
        <Stack.Navigator initialRouteName={"List"}>
            <Stack.Screen
                name="List"
                options={{title: isFirebase ? "List(Firebase)" : "List(Local SQLite)"}}
                component={QuotesListScreen}/>
            <Stack.Screen
                name="Detail"
                options={{title: isFirebase ? "Detail(Firebase)" : "Detail(Local SQLite)"}}
                component={QuoteDetailScreen}/>
        </Stack.Navigator>
    );
}

// the third screen, reuse for favorite list
export function FavoriteStackNavigator() {


    const {isFirebase} = isFirebaseStore()
    const Stack = createNativeStackNavigator<QuoteStackParamList>()
    return (
        <Stack.Navigator initialRouteName={"Favorites"}>
            <Stack.Screen name="Favorites"
                          options={{title: isFirebase ? "Favorites(Firebase)" : "Favorites(Local SQLite)"}}
                          component={FavoritesScreen}/>
            <Stack.Screen
                name="Detail"
                options={{title: isFirebase ? "Detail(Firebase)" : "Detail(Local SQLite)"}}
                component={QuoteDetailScreen}/>
        </Stack.Navigator>
    );
}
