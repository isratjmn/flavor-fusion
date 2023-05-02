/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import slider1 from "./../../assets/images/slider1.jpg";
import slider2 from "./../../assets/images/slider2.jpg";
import Swiper from "swiper";

import "swiper/swiper-bundle.css";

const Home = () => {
	const carouselRef = useRef(null);

	useEffect(() => {
		new Swiper(carouselRef.current, {
			loop: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: {
				delay: 6000, // set the delay time between each slide transition in milliseconds
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}, []);

	return (
		<div>
			<div className="swiper-container" ref={carouselRef}>
				<div className="swiper-wrapper">
					<div className="swiper-slide relative">
						<img
							src={slider1}
							className="w-full opacity-50 h-[850px]"
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
					<div className="swiper-slide">
						<img
							src={slider2}
							className="w-full opacity-50 inset-0 h-[850px]"
							alt="Slide2"
						/>
						<div className="absolute top-[300px] left-96">
							<h1 className="w-[70%] font-extrabold text-5xl text-center">
								Welcome to <br />{" "}
								<span className="text-red-600">
									{" "}
									Flavor Fushion
								</span>
							</h1>
							<p className="w-[70%] text-xl pt-2 text-center">
								Mediterranean cuisine is the culinary style and
								cuisine of the Mediterranean region,
								characterized by its diversity, freshness, and
								healthiness.
							</p>
						</div>
					</div>
				</div>
				<div className="swiper-pagination"></div>
				<div className="swiper-button-next"></div>
				<div className="swiper-button-prev"></div>
			</div>
			{/* <div className="swiper-container" ref={carouselRef}>
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<img
							src={slider1}
							className="w-full opacity-50 inset-0h-[800px]"
							alt="Slide 2"
						/>
					</div>
					<div className="swiper-slide">
						<img
							src={slider2}
							className="w-full opacity-50 inset-0 h-[800px]"
							alt="Slide 2"
						/>
					</div>
					<div className="swiper-slide">
						<img
							src={slider1}
							className="w-full opacity-50 bg-slate-800 inset-0 h-[800px]"
							alt="Slide 2"
						/>
					</div>
					
				</div>
				<div className="swiper-pagination"></div>
			</div> */}
		</div>

		// <div className="swiper-container">
		// 	<div className="swiper-wrapper">
		// 		<div className="swiper-slide relative">
		// 			<img
		// 				src={slider2}
		// 				className="w-full
		//                 h-[900px]"
		// 				alt="Slide 1"
		// 			/>
		// 			<div className="absolute top-[400px] left-96">
		// 				<h1 className="font-extrabold text-5xl text-center">
		// 					Welcome to <br />{" "}
		// 					<span className="text-red-600">
		// 						{" "}
		// 						Flavor Fushion
		// 					</span>
		// 				</h1>
		// 				<p className="text-lg pt-2 text-center">
		// 					Mediterranean cuisine is the culinary style and
		// 					cuisine of the Mediterranean region, characterized
		// 					by its diversity, freshness, and healthiness.
		// 				</p>
		// 			</div>
		// 		</div>
		// 		<div className="swiper-slide ">
		// 			<img
		// 				src={slider1}
		// 				className="w-full opacity-50 inset-0
		//             h-[800px]"
		// 				alt="Slide 2"
		// 			/>
		// 		</div>
		// 	</div>
		// 	<div className="swiper-pagination"></div>
		// </div>
	);
};

export default Home;
