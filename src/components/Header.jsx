import { Download } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<div className="p-4 shadow-sm border flex justify-between items-center">
			<img className="h-16" src="/bird.jpg" />
			<Button className="flex gap-2 items-center">
				<Download /> Download
			</Button>
		</div>
	);
};

export default Header;
