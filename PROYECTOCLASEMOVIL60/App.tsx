import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from './src/components/CustomButton';

export default function App(){
    const handleOnlogin=()=>{
        console.log("prueba desde app");
        alert("Alerta desde app")
    }

    const handleOnlogout=()=>{
        alert("Alerta logout desde app")
    }

    return(
        <View style={style.container}>
            <Text>Open up App</Text>
            <StatusBar style="auto"/>
            <View style={style.buttonsWrapper}>
            <CustomButton 
            title={"Prueba desde App"}
            onClick={()=>{
                console.log("prueba")
            }}/>
            <CustomButton 
            title={'Salir'}
            onClick={handleOnlogout}/>
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
        width:"80%",
        height:"80%",
        borderRadius:15,
        backgroundColor:'white'
    },

    buttonsWrapper:{
        backgroundColor:'pink',
        marginTop:15,
        
        width:"80%",
        height:"25%",
        
        alignItems:"center",
        justifyContent:"space-around",
    },

});