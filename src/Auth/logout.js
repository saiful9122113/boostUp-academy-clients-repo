import { signOut } from "firebase/auth";
import { auth } from "../Login/Signin";

export const logout = async (navigate) => {
    try {
        await signOut(auth)
        navigate("/login");
    } catch (error) {
        console.log("sign out failed!")
    }
}