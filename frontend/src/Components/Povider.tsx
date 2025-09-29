"use client";
import React from 'react'
// import { useState  , createContext , useContext } from 'react'
import { createContext } from 'react';

interface PlayContextType {
    show: boolean;
    setshow: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

interface Bachaprep {
    children : React.ReactNode;
}

interface Setchat {
  Chat : Boolean
}

interface ShowChat {
  showchat: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowChat = createContext<ShowChat>({
  showchat : false,
  setShow:() => {}
})

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

export const SetChat : React.FC<Bachaprep>  = ({children}) => {
  const [showchat , setShow] = React.useState(false)
  return(
   <ShowChat.Provider value={{showchat , setShow}}>
   {children}
   </ShowChat.Provider>
  )

}


