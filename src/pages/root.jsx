import React from 'react';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
			<div className="w-11/12 mx-auto">
				<Navbar></Navbar>
				<Outlet></Outlet>
				<Footer></Footer>
				<ToastContainer></ToastContainer>
			</div>
		);
};

export default Root;