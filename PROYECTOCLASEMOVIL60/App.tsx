import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, requireNativeComponent } from "react-native";
import CustomButton from './src/components/CustomButton';
import { requireNativeModule } from "expo";

export default function App(){
    const handleOnlogin=()=>{
        console.log("prueba desde app");
        alert("Alerta desde app")
    }

    const handleOnlogout=()=>{
        alert("Alerta logout desde app")
    }

    const handleforgetpassword=()=>{
        alert("Alerta se cambiara contraseña")
    }


    return(
        <View style={style.container}>
            
            <View style={style.card}>
            <Text>Open up App</Text>
            <StatusBar style="auto"/>
            <View style={style.buttonsWrapper}>
            <CustomButton 
            title={"Login"}
            onClick={handleOnlogin}/>
            <CustomButton 
            title={'Salir'}
            onClick={handleOnlogout}
            variant="primary"/>
            <CustomButton
            title={"Olvido Contraseña"}
            onClick={handleforgetpassword}
            variant="secondary"/>
        </View>
        </View>
        </View>
    );
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    card:{
        alignItems:'center',
        width:"80%",
        height:"80%",
        borderRadius:10,
        backgroundColor:'lightblue'
    },

    buttonsWrapper:{
        backgroundColor:'green',
        marginTop:15,
        borderRadius:5,
        
        width:"85%",
        height:"30%",
        
        alignItems:"center",
        justifyContent:"flex-start",
    },

});