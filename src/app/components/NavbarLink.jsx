"use client"

import Link from 'next/link'
import { useContext } from "react"
import { SidebarContext } from "../providers"


export default function NavbarLink({ link, title }) {

    const { setShowCart } = useContext(SidebarContext)

    function handleCartClosing(){
        setShowCart(false)
    }

    return (

            <ul>
                <li onClick={handleCartClosing}>
                    <Link href={link}>{title}</Link>
                </li>
            </ul>
    )
}
