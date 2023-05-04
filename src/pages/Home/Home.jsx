import React, { useState, useEffect, useRef } from "react";
import slider1 from "./../../assets/images/slider1.jpg";
import slider2 from "./../../assets/images/slider2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";

import { Navigation, Autoplay, Pagination } from "swiper";

import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

const Home = () => {
	const carouselRef = useRef(null);

	return (
		<div>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="swiper-slide relative">
						<img
							style={{
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
							src={slider1}
							className="w-[100%] bg-cover opacity-50 h-[850px]"
							alt="Slide1"
						/>
						<div className="absolute top-[400px] left-96">
							<h1 className="w-[70%] font-extrabold text-5xl text-center">
								Welcome to 
								<br />
								
								<span className="text-red-600">
									{"  "}
									Flavor Fusion
								</span>
							</h1>
							<p className="w-[70%] text-lg pt-2 text-center">
								Mediterranean cuisine is the culinary style and
								cuisine of the Mediterranean region,
								characterized by its diversity, freshness, and
								healthiness.
							</p>
							<Link className="mr-72 mt-6" to="">
								<button
									type="button"
									className="mt-6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
									View Recipe
								</button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper-slide relative">
						<img
							style={{
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
							src={slider2}
							className="w-[100%] bg-cover opacity-50 h-[850px]"
							alt="Slide1"
						/>
						<div className="absolute top-[400px] left-96">
							<h1 className="w-[70%] font-extrabold text-5xl text-center">
								Welcome to <br />{" "}
								<span className="text-red-600">
									{" "}
									Flavor Fushion
								</span>
							</h1>
							<p className="w-[70%] text-lg pt-2 text-center">
								Mediterranean cuisine is the culinary style and
								cuisine of the Mediterranean region,
								characterized by its diversity, freshness, and
								healthiness.
							</p>
							<Link className="mr-72" to="">
								<button  
									type="button"
									className="mt-6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
								>
									View Recipe
								</button>
							</Link>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Home;
