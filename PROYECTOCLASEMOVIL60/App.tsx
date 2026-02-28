import  {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { AuthProvider } from "./src/Contexts/AuthContext";
import { LanguageProvider } from "./src/Contexts/LanguageContext";

export default function App(){
    
    return(
       <LanguageProvider>
       <AuthProvider> 
            <NavigationContainer>
                <StackNavigator/>
            </NavigationContainer>
        </AuthProvider>
        </LanguageProvider>
    );
}