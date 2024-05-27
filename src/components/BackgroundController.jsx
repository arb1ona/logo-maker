import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BackgroundController = () => {
	const storageValue = JSON.parse(localStorage.getItem("value"));

	const [rounded, setRounded] = useState(storageValue?.bgRounded ?? 10);
	const [padding, setPadding] = useState(storageValue?.bgPadding ?? 50);
	const [color, setColor] = useState(storageValue?.bgColor ?? "#000");

	const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

	useEffect(() => {
		const updatedValue = {
			...storageValue,
			bgRounded: rounded,
			bgPadding: padding,
			bgColor: color,
		};

		setUpdateStorage(updatedValue);
		localStorage.setItem("value", JSON.stringify(updatedValue));
	}, [rounded, padding, color]);

	return (
		<div>
			<div>
				<div className="py-2">
					<label className="p-2 flex justify-between items-center">
						Rounded <span>{rounded} px</span>
					</label>
					<Slider
						defaultValue={[rounded]}
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
						defaultValue={[padding]}
						max={100}
						step={1}
						onValueChange={(event) => setPadding(event[0])}
					/>
				</div>

				<div className="py-2 mb-32">
					<label className="p-2 flex justify-between items-center">
						Item color
					</label>
					<ColorPickerController
						hideSettings={false}
						selectedColor={(color) => setColor(color)}
						value={color}
					/>
				</div>
			</div>
		</div>
	);
};

export default BackgroundController;
