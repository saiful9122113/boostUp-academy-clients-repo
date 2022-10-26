import React from "react"; 
 import { Navigate, useLocation, useNavigate } from "react-router-dom"; 
import { auth } from "../Login/GoogleSignin";
 import { logout } from "./logout"; 

  
 const PrivateRoute = ({ children }) => { 
   const navigate = useNavigate(); 
   const location = useLocation(); 
   console.log(auth)
  
   if (!auth?.currentUser?.accessToken) { 
    logout(navigate); 
   } 
  
   return auth ? ( 
     children 
   ) : ( 
     <Navigate to="/login" replace state={{ from: location }} /> 
   ); 
 }; 
  
 export default PrivateRoute;