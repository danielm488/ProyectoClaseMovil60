import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text} from "react-native";
import { RootStackParamsList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabNavigator";

type Props = NativeStackScreenProps<TabsParamList,'Home'>;

export default function HomeScreen(){
    //destructuring parametro de ruta: sacando una propiedad de 
    //const {email}=route.params

    return(
        <View>
            <Text>Bien Venido</Text>
        </View>
    );
}