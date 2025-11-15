import React from 'react';
import { removeFromStoredDB } from '../add_to_db';
const InstalledApp = ({ singleApp }) => {
	const { id, image, title, downloads, ratingAvg, size } = singleApp;

	const [isUnInstalled, setIsUnInstalled] = useState(false);
	const handleUnInstall = id => {
		removeFromStoredDB(id);
		//addToStoredDB(id);
		setIsUnInstalled(true);
		refreshInstalledList(); 
	};
	
	return (
		<div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 w-full max-w-3xl mx-auto mb-3">
			<div className="flex items-center gap-4">
				<img
					src={image}
					alt={title}
					className="w-16 h-16 rounded-lg bg-gray-200 object-cover"
				/>
				<div>
					<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
					<div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
						<div className="flex items-center gap-1">
							<span className="text-green-600 font-medium">{downloads}M</span>
						</div>
						<div className="flex items-center gap-1">
							<span className="text-orange-500 font-medium">{ratingAvg}</span>
						</div>
						<div>{size} MB</div>
					</div>
				</div>
			</div>

			<button onClick={() => handleUnInstall(id)} className={`${isUnInstalled}bg-[#00D390] hover:bg-[#00b87b] px-4 py-2 rounded-lg font-semibold text-white transition`}>
				Uninstall
			</button>
		</div>
	);
};
export default InstalledApp;