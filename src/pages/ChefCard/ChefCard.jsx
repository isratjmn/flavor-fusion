import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const ChefCard = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/cards")
			.then((res) => res.json())
			.then((data) => setCards(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<h2 className="text-4xl font-bold text-red-600 pt-8 pb-4 mt-16 text-center ">
				Our Special Chefs
			</h2>
            <p className="w-[70%] pb-20 text-lg pt-2 text-center mx-auto">Mediterranean restaurants often have a relaxed and casual atmosphere that makes it easy to enjoy a meal with friends and family. Whether you are looking for a romantic dinner for two or a lively group gathering, a Mediterranean restaurant can provide the perfect setting.</p>
			<div className="grid grid-cols lg:grid-cols-5 gap-5 main-container lg:space-y-0 mb-28">
				{cards.map((card) => (
					<Card key={card.id} card={card}></Card>
				))}
			</div>
		</div>
	);
};

export default ChefCard;
