import React from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
const logoPng = '../../public/imgs/logo.png';

const Navbar = () => {
	const links = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) =>
						`mr-3 font-bold ${isActive ? 'text-purple-600' : 'text-gray-700'}`
					}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/allApps"
					className={({ isActive }) =>
						`mr-3 font-bold ${isActive ? 'text-purple-600' : 'text-gray-700'}`
					}
				>
					Apps
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/installation"
					className={({ isActive }) =>
						`mr-3 font-bold ${isActive ? 'text-purple-600' : 'text-gray-700'}`
					}
				>
					Installation
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-base-100 shadow-sm max-w-[1250px]">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<div className="flex items-center space-x-2">
					<Link to="/" className="flex items-center space-x-2">
						<img className="w-10 h-10" src={logoPng} alt="Logo" />
						<span className="text-xl font-semibold">HERO.IO</span>
					</Link>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>
			<div className="navbar-end">
				<a
					href="https://github.com/md-imteaj-rana"
					target="_blank"
					rel="noopener noreferrer"
					className="btn bg-gradient-l-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
				>
					<Github /> Contribute
				</a>
			</div>
		</div>
	);
};

export default Navbar;