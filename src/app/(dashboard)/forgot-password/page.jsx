import CreateTitle from "@/app/components/CreateTitle";
import FormButton from "@/app/components/FormButton";
import InputData from "@/app/components/InputData";

export default function ForgotPassword() {
    return (
        <div>
            <CreateTitle title="Forgot password"/>
            <form className="flex flex-col items-center space-y-4">
                <InputData type="email" placeholder="Enter your email" />
                <InputData type="password" placeholder="Enter your new password" />
                <InputData type="confirm-password" placeholder="Confirm your password" />
                <FormButton data="Create new password" color="bg-yellow-300" />
            </form>
        </div>
    )
}