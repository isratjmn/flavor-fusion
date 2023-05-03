import React, { useState, useEffect, useRef } from "react";
import slider1 from "./../../assets/images/slider1.jpg";
import slider2 from "./../../assets/images/slider2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";

import { Navigation, Autoplay, Pagination } from "swiper";

import "swiper/swiper-bundle.css";

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
						<div className="absolute top-[300px] left-96">
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
						<div className="absolute top-[300px] left-96">
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
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Home;
