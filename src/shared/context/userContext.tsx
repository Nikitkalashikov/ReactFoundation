import React from "react";
import { useUserData } from "../../hooks/useUserData"; 

interface IUserContextData {
    name?: string;
    iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider( {children} : { children: React.ReactNode }){
    const [data]  = useUserData();

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    );
}