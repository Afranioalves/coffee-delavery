import {createContext, ReactNode, useState} from "react";
import { Product } from "./types";

interface Props{
    children: ReactNode
}

export const Context = createContext({})

export const Provider = ({children}:Props)=> {

    const [cartContext, setCartContext] = useState<Array<Product>>([])

    return (
        <Context.Provider value={{cartContext, setCartContext}}>
            {children}
        </Context.Provider>
    )
  
}