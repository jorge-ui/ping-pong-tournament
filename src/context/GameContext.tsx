import React, {useEffect, useState} from "react";
import IGameContext, {BestOfValues, IGameContextState, MaxScoreValues, Winner} from "../interfaces/IGameContext";


// @ts-ignore
export const GameContext: React.Context<IGameContext> = React.createContext<IGameContext>();


function useGameContextState(): IGameContext {
	const [state, setState] = useState<IGameContextState>({
		maxScore: 11,
		winner: Winner.none,
		bestOf: 3,
		isStarted: false
	});

	useEffect(() => {
		const gameStateStored = localStorage.getItem("gameState");
		gameStateStored && setState(JSON.parse(gameStateStored));
	}, []);

	useEffect(() => {
		localStorage.setItem("gameState", JSON.stringify(state));
	}, [state]);

	function setWinner(winner: keyof typeof Winner) {
		setState(prevState => ({
			...prevState, winner: Winner[winner]
		}))
	}

	function setMaxScore(maxScore: MaxScoreValues) {
		setState(prevState => ({
			...prevState, maxScore
		}))
	}

	function setBestOf(bestOf: BestOfValues) {
		setState(prevState => ({
			...prevState, bestOf
		}))
	}

	function setIsStarted(started: boolean) {
		setState(prevState => ({
			...prevState,
			isStarted: started
		}))
	}

	return { ...state, setWinner, setMaxScore, setBestOf, setIsStarted }
}

const GameContextProvider: React.FC = (props) => {

	const gameContext = useGameContextState();

	return (
		<GameContext.Provider value={gameContext} >
			{props.children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;