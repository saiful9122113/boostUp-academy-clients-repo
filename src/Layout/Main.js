import React from 'react';
import { Outlet } from 'react-router-dom';
import Regi from '../Regi/Regi';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Regi></Regi> */}
        </div>
    );
};

export default Main;