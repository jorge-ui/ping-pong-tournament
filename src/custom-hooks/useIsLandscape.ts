import {useEffect, useState} from "react";

const checkIsLandscape = () => window.innerWidth > window.innerHeight;

function useIsLandscape() {
	const [isLandscape, setIsLandscape] = useState(checkIsLandscape);

	useEffect(() => {
		window.addEventListener("ondeviceorientation", onResizeListener);
		window.addEventListener("resize", onResizeListener);
		window.addEventListener("orientationchange", onResizeListener);

		function onResizeListener() {
			setIsLandscape(checkIsLandscape)
		}

		return () => {
			window.removeEventListener("ondeviceorientation", onResizeListener);
			window.removeEventListener("resize", onResizeListener);
			window.removeEventListener("orientationchange", onResizeListener);
		}
	}, []);

	return isLandscape;
}


export default useIsLandscape;