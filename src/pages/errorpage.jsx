import React from 'react';
import { Link } from 'react-router';
const errorImage = "/imgs/error-404.png"
const errorImage2 = "/imgs/App-Error.png"

const ErrorPage = () => {
    return (
			<div className="flex flex-col items-center justify-center w-11/12 mx-auto py-12">
				<div className="w-full max-w-md mb-6 flex items-center justify-center">
                    <img src={errorImage2} alt="" />
					<img src={errorImage} alt="" />
				</div>
				<div className="text-center">
					<h1 className=" font-bold text-3xl md:text-5xl mb-4">
						Oops, page not found!!!
					</h1>
					<p className="md:text-xl mb-4">
						The page you are looking for is not available.
					</p>
					<Link
						to="/"
						className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
					>
						Go Back!
					</Link>
				</div>
			</div>
		);
};

export default ErrorPage;