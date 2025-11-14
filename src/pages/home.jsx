import React from 'react';
import Apps from './apps';
import Banner from '../components/banner';
import { useLoaderData } from 'react-router';


const Home = () => {
    const appsData = useLoaderData ();
    console.log(appsData)
	return (
		<div>
			<Banner></Banner>
			<Apps appsData={appsData}></Apps>
			
		</div>
	);
};

export default Home;