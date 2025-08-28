"use client"
import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProviders = ({children}) => {

    const [addCart, setAddCart] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const [addItem, setAddItem] = useState([])



  return (
    <SidebarContext.Provider value={{addCart, setAddCart, showCart, setShowCart, addItem, setAddItem}}> 
        {children}
    </SidebarContext.Provider>
  )
}

export { SidebarProviders, SidebarContext}