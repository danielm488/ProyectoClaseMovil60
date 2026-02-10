import { View,Text, TextInput, StyleSheet, TouchableOpacity, KeyboardTypeOptions } from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { useState } from "react";


type Props={
    placeholder:string,
    onChange:(text:string)=> void,
    value:string,
    typeInput : 'password' | 'email' | 'number' | 'text',
    //KeyboardOption(terciary:string)
}

export default function CustomInput({placeholder,onChange,value,typeInput}:Props){
//uso de variables de estado local
    //[nombreDeVariable,funcion]=useState(<valorInicial>)
    const [isSecureText,setIsSecureText]=useState(typeInput==='password');
    const isPasswordField= typeInput==="password";

    const icon: typeof MaterialIcons["name"]|undefined=
        typeInput==="email"?"email":
            typeInput==="password"?"lock":undefined

    const keyboardType: KeyboardTypeOptions=
        //email, numeric & default
        typeInput==="email"?"email-address":
            typeInput==="number"? "numeric":"default"

    const getError =()=>{
        if (typeInput==="email" && !value.includes('@'))
            return "Correo Invalido";
        if(typeInput==="password" && value.length<6)
            return "Contraseña debe tener mas de 6 Caracteres";
    };

    const error= getError();

    return(
        //wrapper
        <View style={styles.wrapper}>
            {/*inputContainer*/}
            <View style={styles.inputContainer}>
                    <MaterialIcons
                        name={placeholder}
                        size={20}
                        color={"#000000"}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={isSecureText}
                        keyboardType={keyboardType}
                    />
                    
                    {isPasswordField && <TouchableOpacity
                        onPress={
                            ()=>{setIsSecureText(!isSecureText)}
                        }>
                         <Ionicons name={isSecureText?'eye-off':'eye'} size={20}/>
                    </TouchableOpacity>}
            </View>
            <View>
                {error && <Text>{error}</Text>}
            </View>
        </View>
    );
}

 const styles= StyleSheet.create({
        wrapper:{
            marginBottom:10,
            width:"100%",
            paddingHorizontal:20,
            backgroundColor:"transparrent",

        },
        inputContainer:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            
            
            borderWidth:1,
            borderColor:"#000",
            borderRadius:6,
            paddingHorizontal:13,

        },
        input:{
            paddingHorizontal:10,
            width: "80%",
        }

    })
