import { createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import TabsNavigator from "./TabNavigator";
import React from "react";

export type RootStackParamsList={

    Login:undefined,
    Tabs:{email:string},

};

const Stack= createNativeStackNavigator<RootStackParamsList>();
    
export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName='login'
        screenOptions ={{headerShown:true}}>
        {/*    <Stack.Screen 
            name="Home" 
            component={HomeScreen}/>*/}

            <Stack.Screen 
                name ="Login" 
                component={LoginScreen}
                options={{title:"Inicio de Sesion"}}
            />

            <Stack.Screen
                name="Tabs"
                component={TabsNavigator}
            />
        </Stack.Navigator>
    );
}
