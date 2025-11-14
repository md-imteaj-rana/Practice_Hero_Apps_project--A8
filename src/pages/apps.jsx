import React, { Suspense } from 'react';
import App from './app';
import { Link } from 'react-router';

const Apps = ({ appsData }) => {
	console.log(appsData)
	const trendingApps = appsData.sort((a,b) => b.downloads - a.downloads).slice(0,6)
		//.filter(app => app.status === 'trending')
        console.log(trendingApps)
	return (
		<div>
			<h1 className="mt-20 text-center font-bold text-5xl">Trending Apps</h1>
			<p className="text-center mt-5 mb-20">
				Explore All Trending Apps on the Market developed by us
			</p>

			<Suspense fallback={<div>Loading...</div>}>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
					{trendingApps.map(singleApp => (
						<App key={singleApp.id} singleApp={singleApp} />
					))}
				</div>
			</Suspense>

			<div className="flex justify-center mt-8">
				<Link to="/allApps">
					<button className="btn bg-gradient-l-to-r from-[#632EE3] to-[#9F62F2] text-white mb-5">
						Show All
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Apps;