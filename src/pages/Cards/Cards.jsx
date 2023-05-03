import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import bannerCard from "./../../assets/images/banner_card.jpg";

const Cards = () => {
	const myStyles = {
		itemShapes: ThinStar,
		activeFillColor: "black",
		inactiveFillColor: "#fffdd0",
	};
	const cards = useLoaderData();
	const {
		_id,
		chefName,
		recipeImage,
		recipeName,
		numberOfRecipes,
		rating,
		cookingMethod,
		ingredients,
		likes,
		chefPhoto,
	} = cards;
	return (
		<div>
			<div>
				<img
					style={{
						backgroundSize: "cover",
						backgroundPosition: "center",
                        objectFit: 'cover'
					}}
					className="h-[350px] w-full opacity-70"
					src={bannerCard}
					alt="Banner"
				/>
				;
				<div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					<div className=" lg:mt-8 py-8 mx-auto lg:mb-0">
						<h2 className="mx-auto font-sans font-bold tracking-normal text-red-600 text-3xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
							Specialized Chef Recipe
						</h2>
					</div>
				</div>
			</div>
			<div className="main-container my-14">
				<div className="grid grid-cols md:grid-cols-5 space-y-3 gap-y-4 md:gap-y-0 md:gap-4 border drop-shadow-sm p-3 md:p-5">
					<div className="card col-span-2 flex justify-center items-center bg-gray-200 rounded-md">
						<img
							className="bg-cover w-full h-[70%]"
							src={recipeImage}
							alt=""
						/>
					</div>
					<div className="col-span-3 flex flex-col">
						<h1 className="text-gray-800 font-bold my-1 text-2xl">
							Recipe Name: {recipeName}{" "}
						</h1>
						<br />
						<p className=" text-lg">
							<span className="font-extrabold">
								Ingredients: {"  "}
							</span>
							{ingredients}
						</p>
						<br />
						<p className="text-lg">
							<span className="font-extrabold">
								Cooking Method: {"  "}
							</span>
							{cookingMethod}
						</p>
						<br />
						<p className="flex font-bold text-lg">
							<Rating
								className="flex"
								style={{ maxWidth: 100 }}
								value={Math.round(rating || 0)}
								itemStyles={myStyles}
								readOnly
							/>
							<span className="ms-2">{rating}</span>
						</p>
						<p className="font-semibold text-xl">
							.................
						</p>

						<div className="flex gap-3 mt-1">
							<div className="flex items-center">
								<p className="text-sm text-gray-500"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
