import CreateTitle from "@/app/components/CreateTitle";
import FormButton from "@/app/components/FormButton";
import InputData from "@/app/components/InputData";
import Link from "next/link";

export default function Login(){
    return (
        <div>
            <CreateTitle title="Login" color="border-b-blue-950"/>

            <form className="flex flex-col items-center space-y-4 m-auto w-3/4">
                <InputData type="email" placeholder="Enter your email"/>
                <InputData type="password" placeholder="Enter your password"/>

                <FormButton data="login" color="bg-red-500"/>
                <button><Link href="/forgot-password">Forgot passowrd?</Link></button>
            </form>
        </div>
    )
}