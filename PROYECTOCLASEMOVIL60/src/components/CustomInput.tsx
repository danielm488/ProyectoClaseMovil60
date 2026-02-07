import { View,Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { useState } from "react";

type Props={
    placeholder:string,
    onChange:(text:string)=> void,
    value:string,
    typeInput : 'password' | 'email' | 'numeric' | 'text',
}

export default function CustomInput({placeholder,onChange,value,typeInput}:Props){
//uso de variables de estado local
    //[nombreDeVariable,funcion]=useState(<valorInicial>)
    const [isSecureText,setIsSecureText]=useState(typeInput==='password');
    const isPasswordField= typeInput==="password";

    const icon: typeof MaterialIcons["name"]|undefined=
        typeInput==="email"?"email":
            typeInput==="password"?"lock":undefined

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
                    />
                    {isPasswordField && <TouchableOpacity
                        onPress={
                            ()=>{setIsSecureText(!isSecureText)}
                        }>
                         <Ionicons name={isSecureText?'eye-off':'eye'} size={20}/>
                    </TouchableOpacity>}
                   
            </View>
            <View>
                <Text>*Campo Requerido</Text>
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
