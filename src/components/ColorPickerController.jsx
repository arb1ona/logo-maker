import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({
	hideSettings = false,
	selectedColor,
	value,
}) => {
	const [color, setColor] = useState("rgba(255,255,255,1)");

	return (
		<div>
			<ColorPicker
				value={value}
				onChange={(e) => {
					setColor(e);
					selectedColor(e);
				}}
				hideControls={hideSettings}
				hideInputType
				hideAdvancedSliders
				hideColorGuide
				hideEyeDrop
			/>
		</div>
	);
};

export default ColorPickerController;
