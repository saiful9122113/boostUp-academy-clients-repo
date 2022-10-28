import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Log from "../Log/Log";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Profile from "../Pages/Profile/Profile";
import Regi from "../Regi/Regi";

export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader: () => {
                    return fetch(`https://learning-platform-server-saiful9122113.vercel.app/courses`)
                },
                element:<Courses/>
            },
            {
                path:'/login',
                element:<Log/>
            },
            {
                path:'/register',
                element:<Regi/>
            },
            {
                path:'/blogs',
                element:<Blog/>
            },
            {
                path:'/faq',
                element:<FAQ/>
            },
            {
                path:'/courses',
                loader: () => {
                    return fetch(`https://learning-platform-server-saiful9122113.vercel.app/courses`)
                },
                element:<Courses/>
            },
            {
                path:'/course/:id',
                loader: ({params}) => {
                    return fetch(`https://learning-platform-server-saiful9122113.vercel.app/course/${params.id}`)
                },
                element:<CourseDetails/>
            },
            {
                path:'/checkout/:id',
                loader: ({params}) => {
                    return fetch(`https://learning-platform-server-saiful9122113.vercel.app/course/${params.id}`)
                },
                element:<PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile /></PrivateRoute>
            },
        ]
    },
    {
        path:'/*',
        element:<ErrorPage/>
    }
])