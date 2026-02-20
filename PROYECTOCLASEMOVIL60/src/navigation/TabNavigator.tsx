
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreens";

export type TabsParamList={
   Home:{email:string}
   Profile:undefined

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
        
            </Tab.Navigator>

        
        
    )
}