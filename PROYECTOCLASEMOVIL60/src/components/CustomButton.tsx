import { View,Text, TouchableOpacity,StyleSheet } from "react-native";

interface CustomButtonProps{
    title: string;
    onClick:()=>void;
}

export default function CustomButton({
    title,
    onClick

}:CustomButtonProps){ 
    
    return(
        <TouchableOpacity
            onPress={onClick}
        >
                <Text>
                    {title}
                </Text>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"Black",
        width:"80%",
        borderWidth:2,
        borderRadius:8,
    },
    text:{
        color:"White",
    }

});

const getStyles = (variant:'primary'|'secondary')=>
    StyleSheet.create({
        container:{
            paddingVertical:15,
            alignItems:'center',
            width:"80%",
            marginTop:12,

            backgroundColor:variant==="primary"?"Black":"white",
            borderRadius:8,
            borderWidth:1,
            borderColor:'white',  
        },
        text:{
            color: 
                variant==="primary"?"white":"black",
            fontSize:18,
            fontWeight:"500"
        }
    })