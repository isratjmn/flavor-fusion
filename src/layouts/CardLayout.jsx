import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Home from "../pages/Home/Home";
import { Outlet } from "react-router-dom";
// import ServiceItem from "../pages/SeviceItem/SeviceItem";

const CardLayout = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default CardLayout;
