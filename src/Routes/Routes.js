import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import Main from "../Layout/Main";
import GoogleSignin from "../Login/GoogleSignin";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/login',
                element:<GoogleSignin/>
            },
            {
                path:'/blog/:id',
                element:<Blog/>
            },
            {
                path:'/courses',
                loader: () => {
                    return fetch(`http://localhost:5000/courses`)
                },
                element:<Courses/>
            },
            {
                path:'/course/:id',
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                },
                element:<CourseDetails/>
            },
            {
                path:'/checkout/:id',
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                },
                element:<PrivateRoute><Checkout /></PrivateRoute>
            },
        ]
    }
])