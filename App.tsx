/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {DailyScreen} from "./screens/DailyScreen.tsx";
import {FavoritesScreen} from "./screens/FavoritesScreen.tsx";
import {QuotesListScreen} from "./screens/QuotesListScreen.tsx";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <AppContent/>
        </SafeAreaProvider>
    );
}

const Tab = createBottomTabNavigator();

function AppContent() {

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Tab.Navigator
                    screenOptions={({route}) => {
                        return ({
                            headerShown: true,
                            tabBarActiveTintColor: '#4B6FFF',
                            tabBarInactiveTintColor: '#999',
                            tabBarIcon: ({focused, color}) => {
                                if (route.name === 'Daily') {
                                    return (
                                        <MaterialDesignIcons
                                            name={focused ? 'book' : 'book-outline'}
                                            size={24}
                                            color={color}
                                        />
                                    );
                                }

                                if (route.name === 'QuotesList') {
                                    return (
                                        <MaterialDesignIcons
                                            name={focused ? 'format-list-bulleted' : 'format-list-bulleted'}
                                            size={24}
                                            color={color}
                                        />
                                    );
                                }

                                if (route.name === 'Favorites') {
                                    return (
                                        <MaterialDesignIcons
                                            name={focused ? 'star' : 'star-outline'}
                                            size={24}
                                            color={color}
                                        />
                                    );
                                }
                            },
                        });
                    }}
                >
                    <Tab.Screen name={"Daily"} component={DailyScreen}/>
                    <Tab.Screen name={"QuotesList"} component={QuotesListScreen}/>
                    <Tab.Screen name={"Favorites"} component={FavoritesScreen}/>
                </Tab.Navigator>
            </View>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
