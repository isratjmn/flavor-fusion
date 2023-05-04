import React from "react";
import "./Service.css";

const Service = (props) => {
	const { image, heading, description } = props.service;
	return (
		<div className="w-[90%] lg:w-full mx-auto">
			<div className="card flex flex-col px-6 rounded-lg shadow-md bg-red-100 py-8">
				<img className="w-24 py-2 mb-2" src={image} alt="image" />
				<h2 className="text-2xl font-bold mb-2">{heading}</h2>
				<p className="text-gray-700 mb-2">{description}</p>
			</div>
		</div>
	);
};

export default Service;
