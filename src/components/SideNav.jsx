import { Image, Pencil, ShieldPlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const SideNav = ({ selectedIndex }) => {
	const menuList = [
		{
			id: 1,
			name: "Icon",
			icon: Pencil,
		},
		{
			id: 2,
			name: "Background",
			icon: Image,
		},
		{
			id: 3,
			name: "Upgrade",
			icon: ShieldPlus,
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemClick = (index) => {
		setActiveIndex(index); // Update internal state first
		selectedIndex(index); // Then call the parent's callback with the correct index
	};

	return (
		<div className="border shadow-sm h-screen">
			<div>
				{menuList.map((menu, index) => (
					<h2
						onClick={() => handleItemClick(index)}
						key={menu.id}
						className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center gap-3 hover:bg-primary hover:text-white 
            ${activeIndex == index && "bg-primary text-white"}
            `}
					>
						<menu.icon />
						{menu.name}
					</h2>
				))}
			</div>
		</div>
	);
};

export default SideNav;
