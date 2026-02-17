import { createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HOmeScreen";

export type RootStackParamsList={

    Login:undefined
    Home:{email:string},

};

const Stack= createNativeStackNavigator<RootStackParamsList>();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName={'login'}>
            <Stack.Screen 
            name="Login" 
            component={LoginScreen}/>

            <Stack.Screen 
            name="Home" 
            component={HomeScreen}/>
        </Stack.Navigator>
    );
}
