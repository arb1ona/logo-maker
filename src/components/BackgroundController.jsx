import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = () => {
	const [rounded, setRounded] = useState(12);
	const [padding, setPadding] = useState(62);
	const [color, setColor] = useState("#000");

	const storageValue = JSON.parse(localStorage.getItem("value-picker"));

	useEffect(() => {
		const updatedValue = {
			...storageValue,
			backgroundRounded: rounded,
			backgroundPadding: padding,
			backgroundColor: color,
		};

		localStorage.setItem("value-picker", JSON.stringify(updatedValue));
	}, [rounded, padding, color]);

	return (
		<div>
			<div>
				<div className="py-2">
					<label className="p-2 flex justify-between items-center">
						Rounded <span>{rounded} px</span>
					</label>
					<Slider
						defaultValue={[12]}
						max={100}
						step={1}
						onValueChange={(event) => setRounded(event[0])}
					/>
				</div>

				<div className="py-2">
					<label className="p-2 flex justify-between items-center">
						Padding <span>{padding} px</span>
					</label>
					<Slider
						defaultValue={[62]}
						max={100}
						step={1}
						onValueChange={(event) => setPadding(event[0])}
					/>
				</div>

				<div className="py-2">
					<label className="p-2 flex justify-between items-center">
						Item color
					</label>
					<ColorPickerController
						hideSettings={false}
						selectedColor={(color) => setColor(color)}
					/>
				</div>
			</div>
		</div>
	);
};

export default BackgroundController;
