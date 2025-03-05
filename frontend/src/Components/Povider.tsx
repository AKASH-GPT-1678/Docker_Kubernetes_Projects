"use client";
import React from 'react'
import { useState  , createContext , useContext } from 'react'

interface PlayContextType {
    show: boolean;
    setshow: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

interface Bachaprep {
    children : React.ReactNode;
}

export const Truecontext = createContext<PlayContextType>({
    show: false,
    setshow: () => {},
});
export const Povider : React.FC<Bachaprep>= ({children }) => {
    const [show , setshow] = React.useState(false)
  return (
   <Truecontext.Provider value={{show , setshow}}>
    {children}

   </Truecontext.Provider>
  )
}

// export default Povider
