import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";

const IconController = () => {
	const [size, setSize] = useState(280);
	const [rotate, setRotate] = useState(0);
	const [color, setColor] = useState("#fff");

	const storageValue = JSON.parse(localStorage.getItem("value-picker"));

	useEffect(() => {
		const updatedValue = {
			...storageValue,
			iconSize: size,
			iconRotate: rotate,
			iconColor: color,
			iconName: "Smile",
		};

		localStorage.setItem("value-picker", JSON.stringify(updatedValue));
	}, [size, rotate, color]);

	return (
		<div>
			<div>
				<label>Icon</label>
				<div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center">
					<Smile />
				</div>

				<div className="py-2">
					<label className="p-2 flex justify-between items-center">
						Size <span>{size} px</span>
					</label>
					<Slider
						defaultValue={[280]}
						max={512}
						step={1}
						onValueChange={(event) => setSize(event[0])}
					/>
				</div>

				<div className="py-2">
					<label className="p-2 flex justify-between items-center">
						Rotate <span>{rotate} °</span>
					</label>
					<Slider
						defaultValue={[0]}
						max={360}
						step={1}
						onValueChange={(event) => setRotate(event[0])}
					/>
				</div>

				<div className="py-2">
					<label className="p-2 flex justify-between items-center">
						Item color
					</label>
					<ColorPickerController
						hideSettings={true}
						selectedColor={(color) => setColor(color)}
					/>
				</div>
			</div>
		</div>
	);
};

export default IconController;
