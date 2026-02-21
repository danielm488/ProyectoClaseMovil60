
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreens";
import RegisterScreen from "../Screens/RegisterScreen"

export type TabsParamList={
   Home:undefined;
   Profile:undefined;
   Register:undefined;

}

const Tab= createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator(){

    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />

            <Tab.Screen
                name="Register"
                component={RegisterScreen}
            />
        
            </Tab.Navigator>

        
        
    )
}