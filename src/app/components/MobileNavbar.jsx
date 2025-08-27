"use client"
import { navbar } from "../data"
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarLink from './NavbarLink'
import { useState } from "react";

export default function MobileNavbar() {

    const [showMenu, setShowMenu] = useState(false)


    const mobileNavbar = navbar.map((item, index) => (
        <NavbarLink key={index} title={item.name} link={item.href} />
    ))
    return (
        <div>
            <ul className="md:hidden flex justify-between text-white bg-slate-950 px-8 py-5 gap-8">
                <NavbarLink title="Home" link="/" />
            </ul>

            <ul className="md:hidden flex flex-col text-white bg-slate-950 px-8 py-5 gap-4 h-screen">
                {mobileNavbar}
            </ul>
        </div>
    )
}