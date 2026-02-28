import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, requireNativeComponent, Alert } from "react-native";
import CustomButton from '../components/CustomButton';
import { requireNativeModule } from "expo";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import HomeScreen from "./HomeScreen";
import {useAuth} from "../Contexts/AuthContext"
import React from "react";

const {login,isAllow}= useAuth();

export default function LoginScreen({navigation}:any){
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");

    const {}=useAuth();

    const handleOnlogin=()=>{
        try{
            const allowed = login(email,password);
            if(allowed){
                navigation.navigate("Tabs",{Screen:"Home"})
            }else {
                Alert.prompt("Credenciales Incorrectas"," Por favor ingrese un correo .edu")
            }
        }catch(error:any){
            Alert.alert(error.message)
        };
    }

    const handleOnlogout=()=>{
        setEmail("example@gmail.com")
        setPassword("")
    }

    const handleforgetpassword=()=>{
        alert("Alerta se cambiara contraseña")
    }


    return(
        <View style={style.container}>
            
            <View style={style.card}>
            <Text>Open App</Text>
            <StatusBar style="auto"/>
            <View style={style.buttonsWrapper}>
             <CustomInput
                placeholder={'email'}
                onChange={setEmail}
                value={email}
                typeInput={"email"}/>
            <CustomInput
                placeholder={'password'}
                onChange={setPassword}
                value={password}
                typeInput={"password"}/>
            
            <CustomInput
                placeholder={''}
                onChange={()=>{}}
                value={"Name"}
                typeInput={"text"}/>

            {/*<CustomInput
                placeholder={''}
                onChange={()=>{}}
                value={"Numero"}
                typeInput={"number"}/>*/}
            
            
            {/*<CustomButton
                title={"Olvido Contraseña"}
                onClick={handleforgetpassword}
                variant="terciary"/>*/}
            
            <CustomButton 
                title={"Login"}
                onClick={handleOnlogin}/>
            <CustomButton 
                title={'Salir'}
                onClick={handleOnlogout}
                variant="secondary"/>
        </View>
        </View>
        </View>
    );
}

const style=StyleSheet.create({
    container:{
        flex:1,
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
        backgroundColor:'#30a3904b',
        marginTop:40,
        borderRadius:5,
        
        width:"85%",
        height:"50%",
        
        flexDirection:"column",
        alignItems:"center",
        alignContent:"space-around",
    },

});