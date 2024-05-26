import { useState } from "react";
import "./App.css";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";

function App() {
	const [selectedIndex, setSelectedIndex] = useState();

	return (
		<div className="p-0">
			<Header />
			<div className="w-64 fixed">
				<SideNav selectedIndex={(value) => setSelectedIndex(value)} />
			</div>
			<div className="ml-64 grid grid-cols-1 md:grid-cols-6">
				<div className="md:col-span-2 border h-screen shadow-sm p-5">
					{selectedIndex === 1 ? <BackgroundController /> : <IconController />}
				</div>

				<div className="md:col-span-3 bg-red-200">Icon Preview</div>
				<div className="bg-blue-200">Ads banner </div>
			</div>
		</div>
	);
}

export default App;
