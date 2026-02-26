import  {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { AuthProvider,useAuth } from "./src/Contexts/AuthContext";

export default function App(){
    
    return(
       <AuthProvider> 
            <NavigationContainer>
                <StackNavigator/>
            </NavigationContainer>
        </AuthProvider>
    );
}