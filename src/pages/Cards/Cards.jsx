import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const Cards = () => {
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
			<div className="main-container my-28">
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
						<p className=" text-lg">
							<Rating
								style={{ maxWidth: 100 }}
								value={Math.round(rating?.number || 0)}
								readOnly
							/>
							<span className="ms-2">{rating}</span>
							<span className="font-extrabold">Ratings: </span>
							{rating}{" "}
						</p>
						<p className="font-semibold text-xl">........</p>

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
