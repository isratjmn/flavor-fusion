import React from "react";

const Singlecard = ({ singleCard }) => {
	const { recipeName, ingredients, cookingMethod, rating } = singleCard;
	return (
		<>
			<div className="bg-indigo-100">
				<div className="flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					{/* Text Content */}
					<div className="pb-20 lg:mt-8 py-10 mx-auto lg:mb-0">
						<h2 className="mx-auto font-sans font-bold tracking-normal text-indigo-600 text-3xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
							Card Details
						</h2>
					</div>
				</div>
			</div>
			<div className="details-container">
				<div className="p-4 lg:py-36 grid grid-cols-1 md:grid-cols-8 lg:gap-12">
					<div className="col-span-5 tracking-wide text-base">
						<img src={recipeName} className="w-[30%] pb-6" alt="" />
						<h2 className="pb-3">
							<span className="font-bold text-xl">
								Job Description:
							</span>{" "}
							{ingredients}
						</h2>
						<h2 className="pb-3">
							<span className="font-bold text-xl pb-2">
								Job Responsibility:
							</span>{" "}
							{cookingMethod}
						</h2>
						<h2 className="pb-3">
							<p className="font-bold text-xl pb-1">
								Educational Requirements:
							</p>
							{requirements}
						</h2>
						<h2 className="pb-3">
							<p className="font-bold text-xl pb-1">
								Experience:
							</p>
							{rating} of experience in IT Field.
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Singlecard;
