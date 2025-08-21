import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white p-4 text-center h-56">
            <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 space-x-4 w-full pb-7">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/support">Support</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/careers">Careers</Link>
                </li>
                <li>
                    <Link href="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
            <p className="text-sm">&copy;{new Date('2003-01-11').getFullYear()} - {new Date().getFullYear()}  Volts Program. All rights reserved.</p>
        </footer>
    )
}