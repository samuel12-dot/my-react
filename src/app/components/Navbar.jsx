import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between space-x-4 p-4 bg-slate-800 text-white">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Products</Link>
                </li>
                <li>
                    <Link href="/products">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}