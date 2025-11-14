import React from 'react';
const appStore = '../../public/imgs/App_Store_(iOS)-Logo.wine.png';
const playStore = '../../public/imgs/images.jpeg';
const heroPng = '../../public/imgs/hero.png';


const Banner = () => {
    return (
			<div>
				{}
				<div className="mt-12 flex flex-col justify-center items-center px-4 md:px-16 lg:px-32">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
							We Build <br />
							<span className="text-[#632EE3]">Productive</span> Apps
						</h1>
						<p className="text-base sm:text-lg md:text-xl lg:text-2xl">
							At HERO.IO, we craft innovative apps designed to make everyday
							life simpler, smarter, and more exciting. <br />
							Our goal is to turn your ideas into digital experiences that truly
							make an impact.
						</p>
					</div>

					{}
					<div className="flex flex-col sm:flex-row items-center gap-4 my-6">
						<a
							href="https://play.google.com/store/games?device=windows"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl px-2.5 py-3 shadow-md hover:shadow-lg transition w-full sm:w-auto"
						>
							<img
								src={playStore}
								alt="Download on Play Store"
								className="w-8 h-8"
							/>
							<span>Play Store</span>
						</a>

						<a
							href="https://apps.apple.com/app/idyourappid"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl px-2.5 py-3 shadow-md hover:shadow-lg transition w-full sm:w-auto">
							<img
								src={appStore}
								alt="Download on App Store"
								className="w-14 h-8"
							/>
							<span>App Store</span>
						</a>
					</div>

					{}
					<div className="w-full mt-6">
						<img
							src={heroPng}
							alt="Hero"
							className="w-full h-auto object-cover rounded-lg"
						/>
					</div>
				</div>

				{}
				<div className="bg-gradient-l-to-r from-[#632EE3] to-[#9F62F2] max-w-[1250px] flex flex-col md:flex-row justify-around items-center p-8 text-white m gap-6 py-20">
					<div className="text-center">
						<p className="text-sm sm:text-base md:text-lg">Total Downloads</p>
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							29.6M
						</h2>
						<p className="text-xs sm:text-sm md:text-base">
							21% more than last month
						</p>
					</div>

					<div className="text-center">
						<p className="text-sm sm:text-base md:text-lg">Users Active</p>
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							906K
						</h2>
						<p className="text-xs sm:text-sm md:text-base">
							46% more than last month
						</p>
					</div>

					<div className="text-center">
						<p className="text-sm sm:text-base md:text-lg">Active Apps</p>
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
							132+
						</h2>
						<p className="text-xs sm:text-sm md:text-base">
							31 more will Launch
						</p>
					</div>
				</div>
			</div>
		);
};

export default Banner;