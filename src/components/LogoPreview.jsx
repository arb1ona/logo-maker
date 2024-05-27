import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const LogoPreview = ({ downloadIcon }) => {
	const [storageValue, setStorageValue] = useState();
	const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

	useEffect(() => {
		const storageData = JSON.parse(localStorage.getItem("value"));
		console.log(storageData);
		setStorageValue(storageData);
	}, [updateStorage]);

	useEffect(() => {
		if (downloadIcon) {
			downloadLogo();
		}
	}, [downloadIcon]);

	const downloadLogo = () => {
		const downloadLogoId = document.getElementById("downloadLogoId");

		html2canvas(downloadLogoId, { backgroundColor: null }).then((canvas) => {
			const pngImage = canvas.toDataURL("image/png");
			const downloadLink = document.createElement("a");
			downloadLink.href = pngImage;
			downloadLink.download = "Arbiona's_Logo_Maker";
			downloadLink.click();
		});
	};

	const Icon = ({ name, color, size, rotate }) => {
		const LucidIcon = icons[name];
		if (!LucidIcon) {
			return;
		}
		return (
			<LucidIcon
				color={color}
				size={size}
				style={{ transform: `rotate(${rotate}deg)` }}
			/>
		);
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div
				className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
				style={{ padding: storageValue?.bgPadding }}
			>
				{/* render icon */}
				<div
					id="downloadLogoId"
					className="h-full w-full flex items-center justify-center"
					style={{
						borderRadius: storageValue?.bgRounded,
						background: storageValue?.bgColor,
					}}
				>
					<Icon
						name={storageValue?.iconName}
						color={storageValue?.iconColor}
						size={storageValue?.iconSize}
						rotate={storageValue?.iconRotate}
					/>
				</div>
			</div>
		</div>
	);
};

export default LogoPreview;
