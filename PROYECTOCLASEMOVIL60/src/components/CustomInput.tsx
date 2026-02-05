import { View,Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { useState } from "react";

type Props={
    placeholder:string,
    onChange:()=> void,
    value:string,
    typeInput : 'password' | 'email' | 'numeric' | 'text',
}

export default function CustomInput({placeholder,onChange,value,typeInput}:Props){
//uso de variables de estado local
    //[nombreDeVariable,funcion]=useState(<valorInicial>)
    const [isSecureText,setIsSecureText]=useState(typeInput==='password');

    

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
                        placeholder={"email"}
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={isSecureText}
                    />
                    <TouchableOpacity
                        onPress={
                            ()=>{
                                
                            }
                        }>
                         <Ionicons name={"eye"} size={20}/>
                    </TouchableOpacity>
                   
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
            backgroundColor:"blue",

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
        icon:{
            
        
        }

    })
