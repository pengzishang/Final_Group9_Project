import {QuoteStackNavigator, FavoriteStackNavigator} from "./QuoteStackNavigator.tsx";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import DailyDrawerNavigator from "./DailyDrawerNavigator.tsx";

const Tab = createBottomTabNavigator();


// the root of the app
function AppTabBarNavigator() {
    const hideTabBarFor = (route: any) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'List';
        return routeName === 'Detail';
    };
    return (
        <Tab.Navigator
            initialRouteName={"Daily Quote"}
            screenOptions={({route}) => {
                return ({
                    tabBarActiveTintColor: '#4B6FFF',
                    tabBarInactiveTintColor: '#999',
                    tabBarIcon: ({focused, color}) => {
                        if (route.name === 'Daily Quote') {
                            return (
                                <MaterialDesignIcons
                                    name={focused ? 'book' : 'book-outline'}
                                    size={24}
                                    color={color}
                                />
                            );
                        }

                        if (route.name === 'Quotes List') {
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
            {/*// the drawer*/}
            <Tab.Screen name={"Daily Quote"} component={DailyDrawerNavigator} options={{headerShown: false}}/>
            {/*the quote stack. include detail and list*/}
            <Tab.Screen name={"Quotes List"} component={QuoteStackNavigator} options={({route}) => ({
                headerShown: false,
                tabBarStyle: {display: hideTabBarFor(route) ? 'none' : 'flex'}
            })}/>
            {/*the favorite quote stack. include detail and list*/}
            <Tab.Screen name={"Favorites"} component={FavoriteStackNavigator} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

export default AppTabBarNavigator;

