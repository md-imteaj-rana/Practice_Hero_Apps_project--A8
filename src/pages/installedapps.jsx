import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../add_to_db';
import InstalledApp from './installedapp';

const InstalledApps = () => {
	const [sort, setSort] = useState('');
	const [applist, setAppList] = useState([]);
	const data = useLoaderData();

const refreshInstalledList = () => {
	const storedAppData = getStoredApp();
		const convertedStoredApp = storedAppData.map(id => parseInt(id));
		const installedAppList = data.filter(app =>
			convertedStoredApp.includes(app.id)
		);
		console.log(installedAppList)
		setAppList(installedAppList);
    //const storedAppData = getStoredApp();
    // const convertedStoredApp = storedAppData.map(id => parseInt(id));
    // const installedAppList = data.filter(app =>
    //     convertedStoredApp.includes(app.id)
    // );
   // setAppList(installedAppList);
};


	useEffect(() => {
		const storedAppData = getStoredApp();
		const convertedStoredApp = storedAppData.map(id => parseInt(id));
		const installedAppList = data.filter(app =>
			convertedStoredApp.includes(app.id)
		);
		setAppList(installedAppList);
	}, [data]);

	const handleSort = type => {
		setSort(type);
		if (type === 'High-Low') {
			const sortedByHigh = [...applist].sort(
				(a, b) => b.downloads - a.downloads
			);
			setAppList(sortedByHigh);
		}
		if (type === 'Low-High') {
			const sortedByLow = [...applist].sort(
				(a, b) => a.downloads - b.downloads
			);
			setAppList(sortedByLow);
		}
	};

	return (
		<>
			<details className="dropdown">
				<summary className="btn m-1">Sort By : {sort ? sort : ''}</summary>
				<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
					<li>
						<a onClick={() => handleSort('High-Low')}>High-Low</a>
					</li>
					<li>
						<a onClick={() => handleSort('Low-High')}>Low-High</a>
					</li>
				</ul>
			</details>

			<h1 className="my-8 text-2xl">({applist.length}) Apps Found</h1>

			<div className="flex flex-wrap gap-5">
				{applist.map(app => (
					<InstalledApp key={app.id} singleApp={app} refreshInstalledList={refreshInstalledList}/>
				))}
			</div>
		</>
	);
};

export default InstalledApps;