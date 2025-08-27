"use client"
import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProviders = ({children}) => {

    const [addCart, setAddCart] = useState(0)
  return (
    <SidebarContext.Provider value={{addCart, setAddCart}}> 
        {children}
    </SidebarContext.Provider>
  )
}

export { SidebarProviders, SidebarContext}