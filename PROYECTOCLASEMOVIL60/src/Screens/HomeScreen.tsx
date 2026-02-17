import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text} from "react-native";
import { RootStackParamsList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamsList,'Home'>;

export default function HomeScreen({route}:Props){
    //destructuring parametro de ruta: sacando una propiedad de 
    const {email}=route.params

    return(
        <View>
            <Text>Bien Venido,{email}</Text>
        </View>
    );
}