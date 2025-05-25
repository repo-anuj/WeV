import { onAuthenticateUser } from "@/actions/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const AuthCallbackPage = async () => {
    const auth = await onAuthenticateUser()
    if (auth.status === 200 || auth.status === 201) {
        redirect('/home')
    } else {
        redirect('/')
    }
}

export default AuthCallbackPage;