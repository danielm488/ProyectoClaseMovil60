import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18n } from "i18n-js";
import React from "react";


type Language= 'es'|'en'|'de'|'fr';

type LanguageContextType={
    language: Language;

    changeLanguage:(lng:Language)=>void;
};

//configuracion de libreria de traducciones, paso 1: definicion de diccionario
const translations={
    en:{sigIn:"Sing In",
        welcome: "Welcome",
        enterEmail:'Please fill your email',
        exit:"Logout"},
    es:{sigIn:"Inciar Sesion",
        welcom:"Bienvenido",
        enterEmail:'Ingrese su correo'},
    de: {sigIn:"anmelden",
        welcom:"wilkommen",
        enterEmail:'Please fill your email'},
    fr: {sigIn:"connexion",
        welcom:"wilkommen"},
}
//2 crear un instancia de libreria 
const i18n=new I18n(translations);

i18n.defaultLocale='en';
i18n.enableFallback=true;

//1.Definir el Contexto

const LanguageContext=createContext<LanguageContextType| null>(null)

export const useLanguage=()=>{ 
    const context = useContext(LanguageContext)
    if(!context) throw new Error('useLanguage debe usarse dentro de Language Provider')
        return(context);
}

export const LanguageProvider= ({children}:{children:React.ReactNode})=>{

    const [language,setLanguage]= useState<Language>("es");

    useEffect(()=>{
        const loadlanguage = async ()=>{
            const storedLanguage = await AsyncStorage.getItem("language");
            if(storedLanguage){
                setLanguage(storedLanguage as Language)
                i18n.locale = storedLanguage;
            }else{
                i18n.locale= i18n.defaultLocale;
            }

        };
        loadlanguage();
    },[])

    const changeLanguage=async (lng:Language)=>{
        setLanguage(lng);
        i18n.locale = lng;
        await AsyncStorage.setItem("language",lng);
        
    }

    return(
        <LanguageContext.Provider value={{language,changeLanguage}}>

        </LanguageContext.Provider>
    )
}

export {i18n}