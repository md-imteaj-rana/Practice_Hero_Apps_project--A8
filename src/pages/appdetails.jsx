import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FcDownload } from 'react-icons/fc';
import { FaStarHalfAlt } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
} from 'recharts';
import { addToStoredDB } from '../add_to_db';

const AppDetails = () => {
	const { id } = useParams();
	const appId = parseInt(id);
	const data = useLoaderData();
	const singleApp = data.find(app => app.id === appId);
	const {
		image,
		title,
		ratingAvg,
		reviews,
		downloads,
		companyName,
		size,
		description,
	} = singleApp;

	const { ratings } = singleApp;
	const chartData = ratings.map(r => ({
		name: r.name,
		count: r.count,
	}));

	const [isInstalled, setIsInstalled] = useState(false);
	const handleInstall = id => {
		addToStoredDB(id);
		setIsInstalled(true);
	};

	return (
		<div>
			<div className="card flex flex-col md:flex-row bg-base-100 shadow-sm">
				<figure>
					<img src={image} alt="Movie" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-3xl">{title}</h2>
					<p>
						Developed by{' '}
						<span className=" text-purple-500 font-bold">{companyName} </span>
					</p>

					<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 border-y-2 border-gray-200 p-4 md:p-8">
						<div>
							<span className="w-10 h-10">
								<FcDownload />
							</span>
							<p>Downloads</p>
							<p className="font-bold text-4xl">{downloads}</p>
						</div>
						<div>
							<span>
								<FaStarHalfAlt />
							</span>
							<p>Average Ratings</p>
							<p className="font-bold text-4xl">{ratingAvg}</p>
						</div>
						<div>
							<span>
								<MdReviews />
							</span>
							<p>Total Reviews</p>
							<p className="font-bold text-4xl">{reviews}</p>
						</div>
					</div>

					<div className="card-actions justify-self-start">
						<button
							onClick={() => handleInstall(appId)}
							className={`btn ${
								isInstalled
									? 'bg-[#00D390] cursor-not-allowed'
									: 'bg-[#00D390] text-white'
							}`}
							disabled={isInstalled}
						>
							{isInstalled ? 'Installed' : `Install Now (${size}MB)`}
						</button>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<h3 className="text-2xl font-bold mb-4">Ratings</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						layout="vertical"
						data={chartData}
						margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis type="number" />
						<YAxis type="category" dataKey="name" />
						<Tooltip />
						<Bar dataKey="count" fill="#FF8C00" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="my-12 p-8">
				<h1 className="text-2xl font-bold">Description: </h1>
				<p className="text-[##627382]">{description}</p>
			</div>
		</div>
	);
};

export default AppDetails;