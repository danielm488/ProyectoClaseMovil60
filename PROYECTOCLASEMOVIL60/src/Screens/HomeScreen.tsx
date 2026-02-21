import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text} from "react-native";
import { RootStackParamsList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabNavigator";
import CustomButton from "../components/CustomButton";

type Props = NativeStackScreenProps<TabsParamList,'Home'>;



export default function HomeScreen({navigation}:any){
    //destructuring parametro de ruta: sacando una propiedad de 
    //const {email}=route.params

    const HandleSettingButton=()=>{
        navigation.navigate("Tabs",{Screen:"Register"})
    }

    return(
        <View>
            <CustomButton 
                title={"Registro"}
                onClick={HandleSettingButton}
            />
        </View>
    );
}