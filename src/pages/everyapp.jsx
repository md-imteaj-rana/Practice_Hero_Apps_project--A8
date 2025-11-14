import React from 'react';
import { Star } from 'lucide-react';
import { SquareArrowDown } from 'lucide-react';
import { Link } from 'react-router';

const EveryApp = ({ singleApp }) => {
    console.log(singleApp);
    const { image, title, downloads, reviews, id } = singleApp;
	return (
		<Link to={`./appdetails.jsx/${id}`}>
			<div>
				<div className="card bg-base-100 w-96 shadow-lg px-5">
					<figure>
						<img src={image} alt="Shoes" />
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

export default EveryApp;