import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text} from "react-native";
import { RootStackParamsList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabNavigator";
import CustomButton from "../components/CustomButton";
import { Button } from "react-native";
import { useLanguage } from "../Contexts/LanguageContext";
import React from "react";

type Props = NativeStackScreenProps<TabsParamList,'Home'>;



export default function HomeScreen({navigation}:any){
    //destructuring parametro de ruta: sacando una propiedad de 
    //const {email}=route.params
    const {changeLanguage,language}= useLanguage();

    return(
        <View>
            <Text>Bienvenido a home</Text>
            <Text>Tu idioma actual es :{}</Text>
            <Button title="en" onPress={()=>changeLanguage('en')}/>
            <Button title="es" onPress={()=>changeLanguage('es')}/>
            <Button title="de" onPress={()=>changeLanguage('de')}/>
            <Button title="fr" onPress={()=>changeLanguage('fr')}/>
        </View>
    );
}