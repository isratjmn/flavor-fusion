import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import image4 from './../assets/baked.jpg'

const VisitUs = () => {
	return (
		<div className=" mx-5 md:mx-20 my-28 grid md:grid-cols-2 ">
			<div className="mb-10 md:mb-0 flex flex-col items-center justify-center">
				<div>
					<h2 className="text-red-700 font-popins text-5xl font-extrabold">
						Visit Us
					</h2>
					<p className="my-5 flex items-center gap-3 b-6 text-base font-semibold dark:text-white">
						{" "}
						<FaMapMarkerAlt />
						150 Duffy Ave, Hicksville,<br />
						NY 11801, USA 
					</p>

                    <h4 className="font-bold text-[1.5rem] mb-3 mt-4 text-red-700">
						Contact Details
					</h4>
					<p className="mb-6 text-base font-semibold dark:text-white flex items-center gap-3">
						<FaPhoneAlt />1 (234) 567-891
					</p>

					<div>
						<h2 className="font-bold text-[1.5rem] mb-3 mt-4 text-red-700">
							Visiting Hours
						</h2>
						<ul className="mb-6 text-base font-semibold dark:text-white">
							
							<li className="mb-2">
								Saturday ----   09:00 - 23:00
							</li>
							<li className="mb-2">
								Sunday ---- 12:00 - 23:00
							</li>
                            <li className="mb-2">
								Monday - Friday ----  09:00 - 23:00
							</li>
						</ul>
					</div>
					
				</div>
			</div>
			<div>
				<img
					src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c1f253e1c8d55655a84ff9f2/s-min.jpg"
					alt="image"
				/>
			</div>
		</div>
	);
};

export default VisitUs;
