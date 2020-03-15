import React from 'react';
import ScoreScreen from "./components/score-screen/score-screen.component";
import useIsLandscape from "./custom-hooks/useIsLandscape";
import MainMenu from "./components/main-menu/main-menu.component";
import WinScreen from "./components/win-screen/win-screen.component";

const App = () => {
	const isLandscape = useIsLandscape();
	return <>
		{ isLandscape ?
		 <ScoreScreen/>
		 : <MainMenu/> }
		<WinScreen/>
		</>;
};

export default App;
