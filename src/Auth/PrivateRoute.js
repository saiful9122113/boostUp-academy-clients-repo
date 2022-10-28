import { getAuth } from "firebase/auth";
import React,{useContext} from "react"; 
 import { Navigate, useLocation, useNavigate } from "react-router-dom"; 
import app from "../firebase/firebase.config";
 import { logout } from "./logout"; 
 import {AuthContext} from '../context/AuthProvider/AuthProvider.js'
  
 const PrivateRoute = ({ children }) => { 
  const {user}=useContext(AuthContext)
   const navigate = useNavigate(); 
   const location = useLocation(); 
   const auth = getAuth(app)
  
   return auth?.currentUser?.accessToken ? ( 
     children 
   ) : ( 
     <Navigate to="/login"  state={{ from: location }} replace /> 
   ); 
 }; 
  
 export default PrivateRoute;