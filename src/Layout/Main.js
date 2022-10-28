import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Themes from '../Themes/Themes';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Themes></Themes> */}
        </div>
    );
};

export default Main;