import React, { useState, Suspense } from 'react';
import { useLoaderData } from 'react-router';
import EveryApp from './everyapp';
const logoPng = '../../public/imgs/App-Error.png';

const EveryApps = () => {
	const data = useLoaderData();
	const [filteredApps, setFilteredApps] = useState(data);
	const [searchValue, setSearchValue] = useState(''); 

	
	const handleSearch = () => {
		const search = searchValue.toLowerCase().trim();

		if (!search) {
			setFilteredApps(data);
			return;
		}

		const matchedApps = data.filter(app =>
			app.title.toLowerCase().includes(search)
		);

		setFilteredApps(matchedApps);
	};

	return (
		<div>
			<div className="text-center my-8">
				<h1 className="text-5xl font-bold mb-5">Our All Applications</h1>
				<p>
					Explore All Apps on the Market developed by us. We code for Millions
				</p>

				<div className="flex flex-col sm:flex-row justify-between items-center gap-3 my-5 px-4">
					<div className="flex gap-2 items-center">
						<span className="font-semibold text-gray-700">
							({filteredApps.length})
						</span>
						<h3>Apps Found</h3>
					</div>

					<div className="flex gap-2">
						<input
							type="text"
							value={searchValue}
							onInput={e => setSearchValue(e.target.value)}
							placeholder="Search app"
							className="input input-bordered input-sm w-full max-w-xs"
						/>
						<button
							onClick={handleSearch}
							className="btn btn-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
						>
							Search
						</button>
					</div>
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-4">
						{filteredApps.length > 0 ? (
							filteredApps.map(singleApp => (
								<EveryApp key={singleApp.id} singleApp={singleApp} />
							))
						) : (
							<div className="col-span-full flex flex-col justify-center items-center h-[50vh]">
								<p className="text-gray-500 text-lg mb-4 font-bold">
									No apps found matching your search.
								</p>
								<img
									src={logoPng}
									alt="No apps"
									className="object-contain"
								/>
							</div>
						)}
					</div>
				</Suspense>
			</div>
		</div>
	);
};

export default EveryApps;