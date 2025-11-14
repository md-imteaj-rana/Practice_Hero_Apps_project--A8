import React from 'react';
import { createBrowserRouter,} from 'react-router';
import Root from './pages/root';
import ErrorPage from './pages/errorpage';
import Home from './pages/home';
import EveryApps from './pages/everyapps';
import About from './pages/about';
import AppDetails from './pages/appdetails';
import InstalledApps from '../src/pages/installedapps';
  

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				loader: () => fetch('/appsdata.json'),
				path: '/',
				Component: Home,
			},
			{
				Component: EveryApps,
				path: '/allApps',
				loader: () => fetch('/appsdata.json'),
			},
			{
				path: '/about',
				Component: About,
			},
			{
				path: '/appDetails/:id',
				loader: () => fetch('/appsdata.json'),
				Component: AppDetails,
			},
			{
				path: '/installation',
				Component: InstalledApps,
				loader: () => fetch('/appsdata.json'),
			},
		],
	},
	
]);