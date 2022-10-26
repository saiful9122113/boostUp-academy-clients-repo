import React from 'react';
import { Outlet } from 'react-router-dom';
import GoogleSignin from '../Login/GoogleSignin';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <GoogleSignin></GoogleSignin> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;