import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar() {
    return (
        <nav>
            <DesktopNavbar />
            <MobileNavbar />
        </nav>
    )
}