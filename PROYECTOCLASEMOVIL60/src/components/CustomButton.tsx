import { View,Text, TouchableOpacity,StyleSheet } from "react-native";


interface CustomButtonProps{
    title: string;
    onClick:()=>void;
    variant?:"primary"|"secondary";
}

export default function CustomButton({
    title,
    onClick,
    variant="primary",
}:CustomButtonProps){ 
        const styles   = getStyles(variant);
    
    return(
        <TouchableOpacity
            onPress={onClick}
            style={styles.container}
        >
                <Text
                style={styles.text}>
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

            backgroundColor:
                variant==="primary"?"#dad7e98a":
                variant==="secondary"?"#573cdeb7":"transparent",
            borderRadius:15,
            borderWidth:
            variant === "primary" ? 1 : 0,
            borderColor:
            variant === "primary" ? "#ffffff": "transparent",  
        },
        text:{
            color: 
                variant==="primary"?"#ffffff":
                variant==="secondary"?"#d6e531":"black",
            fontSize:18,
            fontWeight:"500"
        }

    })
