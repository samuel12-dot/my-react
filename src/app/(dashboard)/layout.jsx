import Link from "next/link"
import CreateTitle from "../components/CreateTitle"
import InputData from "../components/InputData"
import FormButton from "../components/FormButton"

export default function DashboardLayout({ children }) {
    return (
        <div>
            <nav>
                <ul className="flex justify-end space-x-4 py-6 px-8 bg-slate-950 text-white">
                    <li>
                        <Link href="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link href="/login">Log In</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                </ul>
            </nav>
            {children}
            {/* <CreateTitle title="Sign up details" color="green"/> */}

            {/* {children} */}
        </div>
    )
}