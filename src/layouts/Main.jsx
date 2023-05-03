/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home';
import ServiceItem from '../pages/SeviceItem/SeviceItem';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home>
                
            </Home>
            <ServiceItem></ServiceItem>
            <Footer></Footer>
        </div>
    );
};

export default Main;