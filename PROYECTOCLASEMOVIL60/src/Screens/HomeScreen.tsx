import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text} from "react-native";
import { RootStackParamsList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabNavigator";
import CustomButton from "../components/CustomButton";
import { Button } from "react-native/types_generated/index";
import { useLanguage } from "../Contexts/LanguageContext";

type Props = NativeStackScreenProps<TabsParamList,'Home'>;



export default function HomeScreen({navigation}:any){
    //destructuring parametro de ruta: sacando una propiedad de 
    //const {email}=route.params
    const {changeLanguage,language}= useLanguage();

    return(
        <View>
            <Text>Bienvenido a home</Text>
            <Text>Tu idioma actual es :{}</Text>
            <Button tittle="en" onPress={()=>changeLanguage('en')}/>
            <Button tittle="es" onPress={()=>changeLanguage('es')}/>
            <Button tittle="de" onPress={()=>changeLanguage('de')}/>
            <Button tittle="fr" onPress={()=>changeLanguage('fr')}/>
        </View>
    );
}