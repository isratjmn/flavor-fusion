import React from "react";
import Singlecard from "../SingleCard/Singlecard";


const CardDetails = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/cards")
			.then((res) => res.json())
			.then((data) => {
				const selectCard = data.find((j) => j._id === id);
				setCards([selectCard]);
			})
			.catch((error) => console.error(error));
	}, []);
	return (
		<div>
			
			{cards.map((singleCard) => (
				<Singlecard
					key={singleCard._id}
					singleCard={singleCard}
				></Singlecard>
			))}
		</div>
	);
};

export default CardDetails;
