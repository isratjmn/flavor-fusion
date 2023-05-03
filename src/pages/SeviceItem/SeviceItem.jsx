

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
			<h2 className="text-4xl font-bold text-red-600 py-16 mt-16 text-center ">Services We provide</h2>
			<div className="grid grid-cols lg:grid-cols-4 gap-5 main-container lg:space-y-0 mb-28">
				{services.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default SeviceItem;
