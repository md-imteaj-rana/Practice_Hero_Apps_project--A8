// import React, { use, useState } from 'react';
import { Star } from "lucide-react";
import { SquareArrowDown } from "lucide-react";
import { Link } from "react-router";

const App = ({ singleApp }) => {
	// const appsData = use(appPromise);
	// const [allApps, setAllApps] = useState(appsData);
    const { image, title, downloads, reviews, id } = singleApp;

	return (
		<Link to={`./appdetails/${id}`}>
			<div>
				<div className="card bg-base-100 w-95 shadow-lg px-5">
					<figure>
						<img className=" w-[30px] h-[35px]" src={image} alt="" />
					</figure>
					<div className=" card-body">
						<h2 className="px-5 card-title">{title}</h2>

						<div className="card-actions justify-between px-5">
							<div className="badge badge-outline text-green-400 font-bold text-lg">
								<SquareArrowDown />
								{downloads}
							</div>
							<div className="badge badge-outline text-orange-500 font-bold text-lg">
								<Star />
								{reviews}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default App;