import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";

export type Prarameter()=>{}

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName={'login'}>
            <Stack.Screen name="login" component={LoginScreen}/>
        </Stack.Navigator>
    );
}
