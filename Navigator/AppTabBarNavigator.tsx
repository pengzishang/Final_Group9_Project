import {DailyScreen} from "../screens/DailyScreen.tsx";
import {QuoteStackNavigator, FavoriteStackNavigator} from "./QuoteStackNavigator.tsx";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function AppTabBarNavigator() {
    const hideTabBarFor = (route: any) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'List';
        return routeName === 'Detail';
    };
    return (
        <Tab.Navigator
            initialRouteName={"QuotesList"}
            screenOptions={({route}) => {
                return ({
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
            }}>
            <Tab.Screen name={"Daily"} component={DailyScreen} options={{headerShown: true}}/>
            <Tab.Screen name={"QuotesList"} component={QuoteStackNavigator} options={({route}) => ({
                headerShown: false,
                tabBarStyle: {display: hideTabBarFor(route) ? 'none' : 'flex'}
            })}/>
            <Tab.Screen name={"Favorites"} component={FavoriteStackNavigator} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

export default AppTabBarNavigator;

