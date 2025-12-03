
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DailyScreen} from "../screens/drawer/DailyScreen.tsx";
import {SettingScreen} from "../screens/drawer/SettingScreen.tsx";
import {AboutScreen} from "../screens/drawer/AboutScreen.tsx";

const Drawer = createDrawerNavigator()


// the drewer in the first screen
function DailyDrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName={"Daily"}>
            <Drawer.Screen name="Daily" component={DailyScreen}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
            <Drawer.Screen name="Setting" component={SettingScreen}/>
        </Drawer.Navigator>
    );
}

export default DailyDrawerNavigator;
