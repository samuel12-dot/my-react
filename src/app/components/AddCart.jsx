'use client'

import { useContext } from "react"
import { SidebarContext } from "../providers"


export default function AddCart() {

    const { setAddCart } = useContext(SidebarContext)

    function handleCartItem() {
        setAddCart(prev => prev + 1)
    }

  return (
    <button type="button" className='bg-blue-500 h-12 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-800' onClick={handleCartItem}>Add to Cart</button>
  )
}
