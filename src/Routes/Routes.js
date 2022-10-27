import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
// import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Log from "../Log/Log";
import Signin from "../Login/Signin";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Regi from "../Regi/Regi";

export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        // ErrorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader: () => {
                    return fetch(`http://localhost:5000/courses`)
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
    },
    {
        path:'/*',
        element:<ErrorPage/>
    }
])