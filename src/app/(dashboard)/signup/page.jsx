import InputData from "@/app/components/InputData"
import FormButton from "@/app/components/FormButton"
import CreateTitle from "@/app/components/CreateTitle"

export default function Signup() {
    return (
        <div>
            <CreateTitle title="Sign up details" tc="text-green-950 font-bold" color="border-b-green-950"/>
            
            <form className="flex flex-col items-center space-y-4 m-auto w-3/4">
                <InputData type="text" placeholder="Enter your name" />
                <InputData type="email" placeholder="Enter your email" />
                <InputData type="password" placeholder="Enter your password" />
                <InputData type="confirm-password" placeholder="Confirm your password" />

                <FormButton data="Sign Up" color="bg-green-500"/>
            </form>
        </div>
    )
}