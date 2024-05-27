import { useState } from "react";
import "./App.css";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
	const [selectedIndex, setSelectedIndex] = useState();
	const [updateStorage, setUpdateStorage] = useState({});

	return (
		<UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
			<div className="p-0">
				<Header />
				<div className="grid grid-cols-1 md:grid-cols-12">
					<div className="w-64 fixed">
						<SideNav selectedIndex={(value) => setSelectedIndex(value)} />
					</div>
					<div className="ml-64 grid grid-cols-1 md:grid-cols-7 fixed">
						<div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
							{selectedIndex === 1 ? (
								<BackgroundController />
							) : (
								<IconController />
							)}
						</div>

						<div className="md:col-span-4">
							<LogoPreview />
						</div>
						<div className="bg-blue-200">Ads banner </div>
					</div>
				</div>
			</div>
		</UpdateStorageContext.Provider>
	);
}

export default App;
