import { createContext, use, useContext, useState } from "react";
import LoginScreen from "../Screens/LoginScreen";

type User={
    id?:string;
    email:string;
    token?: string;
}|null;
type AuthContextType={
    
    user:User;
    isAllow:Boolean;
    //login:(email:string,password:string)=>Promise<void>;
    login:(email:string,password:string)=>boolean;
    //register:(email:string,password:string)=>Promise<void>;
    //register:(email:string,password:string)=>boolean;
    logout:()=>void;
};

//1.    Definir el Contexto:
const AuthContext = createContext<AuthContextType|null>(null)

//2.    Utilizar el contexto:Hook Personalizado
const useAuth=()=>{
    const context=useContext(AuthContext);
    if (!context)throw new Error("useAuth debe usarse dentro de AuthProvider")
        return (context);
};

//3. definicion de Context Provider
export const AuthProvider=({children}:{children:React.ReactNode})=>{
   const [user,setUser]=useState<User>(null);
   const [isAllow,setisAllow]=useState<boolean>(false);
   
   const login= (email:string,password:string)=>{
        const allowed=email.endsWith(".edu");
        if(allowed){
            setUser({email})
            setisAllow(allowed)
        }
    return allowed;
   } 

   const logout= ()=>{
        setUser(null);
        setisAllow(false);
    };

    return(
        <AuthContext.Provider value={{user,isAllow,login,logout}}>
        {children}
        </AuthContext.Provider>
    );
}