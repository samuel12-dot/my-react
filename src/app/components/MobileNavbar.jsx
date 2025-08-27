"use client"
import { navbar } from "../data"
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarLink from './NavbarLink'
import { useState } from "react";
import CartLink from "./CartLink";

export default function MobileNavbar() {

    const [showNav, setShowNav] = useState(false)
    function handleMobileNav() {
        setShowNav(!showNav)
    }


    const mobileNavbar = navbar.map((item, index) => (
        <NavbarLink key={index} title={item.name} link={item.href} />
    ))
    return (
        <div>
            <ul className="md:hidden flex justify-between text-white bg-slate-950 px-8 py-5 gap-8">
                <li><NavbarLink title="Home" link="/" /></li>
                <li onClick={handleMobileNav}><RxHamburgerMenu /></li>
            </ul>

            {showNav &&
                <ul className="md:hidden flex flex-col text-white bg-slate-950 px-8 py-5 gap-4 h-screen" onClick={handleMobileNav}>
                    {mobileNavbar}
                    <CartLink />
                </ul>
            }
        </div>
    )
}