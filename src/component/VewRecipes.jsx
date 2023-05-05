
import { Card } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Recepi from "./Recepi";
import Loader from "./shared/Loader";

const VewRecipes = () => {
	const chef = useLoaderData();
	const { id, name, image, experience, recipes, likes, description } = chef;

	return (
		<>
			<div className="py-28 bg-zinc-500 flex lg:px-20 items-center">
				<div className="flex-row-reverse mt-8 lg:flex lg:flex-row">
					<div className="w-full px-4 lg:w-2/4">
						<img
							src={image}
							className="h-[400px] lg:h-[450px] sm:w-[100%] md:w-[50%] mt-10"
							alt="img"
						/>
					</div>
					<div className="px-4 lg:w-2/4 mt-36">
						<h2 className="text-primary mb-3 text-5xl font-bold font-vibes tracking-[0.4em]">
							{name}
						</h2>
						<p className="text-zinc-100 font-popins">
							{" "}
							{experience} of experience{" "}
						</p>
						<p className="mt-10  text-white">{description}</p>
					</div>
				</div>
			</div>
			<div className="mt-20 mb-40 px-4 lg:px-20">
				<h2 className="text-4xl mb-10 pt-20 font-popins font-extrabold text-center">
					{" "}
					Recipes
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{recipes.map((recipe) => (
						<Recepi key={recipe.id} recipe={recipe} />
					))}
				</div>
			</div>
		</>
	);
};

export default VewRecipes;
