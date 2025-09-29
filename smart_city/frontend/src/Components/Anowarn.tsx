"use client";   
import React, { useState } from 'react'

import { createContext } from 'react';


export interface ContextType {
    color: string;
    setColor: (color: string) => void;
}

interface Node {
  children : React.ReactNode
}

// Create the context with a default undefined value
export const ColorContext = createContext<ContextType >({
    color : "orange",
    setColor : () => {}
});



export const Anowarn: React.FC<Node> = ({ children }) => {
    const [color, setColor] = useState<string>("orange")
    return (
       <ColorContext.Provider value={{color , setColor}}>
       {children}
       </ColorContext.Provider>
    )
}

// export default Anowarn
