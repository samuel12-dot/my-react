"use client"

import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { SidebarContext } from "../providers";

export default function CartLink() {
  const { addCart, showCart, setShowCart } = useContext(SidebarContext)

  function handleCartDisplay() {
    setShowCart(!showCart)
  }
  return (
    <li className="flex items-center gap-2 cursor-pointer" onClick={handleCartDisplay}>
      <FaCartShopping className="text-2xl" />
      <span>
        <sup>{addCart}</sup>
      </span>
    </li>
  )
}
