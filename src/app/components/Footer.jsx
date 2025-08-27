import NavbarLink from "./NavbarLink"
import { footerData } from "../data"

export default function Footer() {

    const footerNav = footerData.map((item, index) => (
        <ul key={index}>
            <li><NavbarLink link={item.href} title={item.name} /></li>
        </ul>
    ))


    return (
        <footer className="bg-slate-800 text-white p-4 px-16 py-8">

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">{footerNav}</div>

            <p className="text-sm">&copy;{new Date('2003-01-11').getFullYear()} - {new Date().getFullYear()}  Volts Program. All rights reserved.</p>

        </footer>
    )
}