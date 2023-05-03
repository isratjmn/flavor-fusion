

import React, { useState } from "react";
import { useEffect } from "react";
import Service from "../Service/Service";

const SeviceItem = () => {
	const [services, setSevices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/services")
			.then((res) => res.json())
			.then((data) => setSevices(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<h2 className="text-4xl font-bold text-red-600 pt-8 pb-4 mt-16 text-center ">Services We provide</h2>
			<p className="w-[70%] text-lg pt-2 pb-20 mx-auto text-center"> Mediterranean restaurant chef is a highly skilled professional who is dedicated to creating delicious and healthy dishes that showcase the flavors and ingredients of the Mediterranean region. </p>
			<div className="grid grid-cols lg:grid-cols-4 gap-5 main-container lg:space-y-0 mb-28">
				{services.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default SeviceItem;
