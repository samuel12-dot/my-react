import { navbar } from "../data"
import CartLink from "./CartLink"
import NavbarLink from "./NavbarLink"

export default function DesktopNavbar() {

  const desktopNav = navbar.map((item, index) => (
    <NavbarLink key={index} title={item.name} link={item.href} />
  ))

  return (
    <ul className="hidden md:flex justify-between text-white bg-slate-950 px-16 py-8 gap-5">
      {desktopNav}
      <CartLink />
    </ul>
  )
}
