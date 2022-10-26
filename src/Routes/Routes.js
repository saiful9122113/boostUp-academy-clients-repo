import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Course from "../Pages/Courses/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

export const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog/:id',
                element:<Blog></Blog>
            },
            {
                path:'/courses',
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/courses`)
                },
                element:<Courses></Courses>
            },
            {
                path:'/course/:id',
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                },
                element:<Course></Course>
            },
        ]
    }
])