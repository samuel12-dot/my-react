"use client"

import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { SidebarContext } from "../providers";

export default function CartLink() {
  const { addCart } = useContext(SidebarContext)
  return (
    <li className="flex items-center gap-2 cursor-pointer">
      <FaCartShopping />
      <span>
        <sup>{addCart}</sup>
      </span>
    </li>
  )
}
