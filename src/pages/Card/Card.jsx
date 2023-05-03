import React from "react";

const Card = (props) => {
	const { chefName, yearsOfExperience, numberOfRecipes, likes, chefPhoto } =
		props.card;

	return (
		<div className="w-[90%] lg:w-full mx-auto">
			<div className="flex flex-col px-6 rounded-lg shadow-md bg-red-100 py-8">
				<img
					className="w-full h-56 py-2 mb-2"
					src={chefPhoto}
					alt="image"
				/>
				<h2 className="text-2xl font-bold mb-2">{chefName}</h2>
				<p className="text-gray-700 mb-2">
					Experierce: {yearsOfExperience} + Years
				</p>
				<p className="text-gray-700 mb-2">Recipes: {numberOfRecipes}</p>
				<div className="flex gap-1 items-center">
					<p className="text-gray-700 mb-2">{likes} Likes</p>
					<button
						type="button"
						className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
					>
						View Recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
