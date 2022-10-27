import { signOut } from "firebase/auth";
import { auth } from "../Register/Register";
// import { auth } from "../Login/Signin";

export const logout = async (navigate) => {
    try {
        await signOut(auth)
        // await signOut(auth)
        navigate("/login");
        // navigate("/login");
    } catch (error) {
        console.log("sign out failed!")
    }
}