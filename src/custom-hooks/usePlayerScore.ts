import IPlayerContext, {IPlayerState} from "../interfaces/IPlayerContext";
import {useContext, useEffect, useState} from "react";
import {GameContext} from "../context/GameContext";
import {Winner} from "../interfaces/IGameContext";

const INITIAL_STATE: IPlayerState = {
	name: "",
	score: 0,
	gamesWon: 0
};

function usePlayerScore(playerId: keyof typeof Winner): IPlayerContext {
	const {maxScore, bestOf, setWinner} = useContext(GameContext);
	const [state, setState] = useState<IPlayerState>(INITIAL_STATE);

	// Load from local storage if available
	useEffect(() => {
		const payerStored = localStorage.getItem(playerId);
		payerStored && setState(JSON.parse(payerStored));

		const onResetGame = () => setState(prevState => {
			setWinner("none");
			return ({
				...prevState, score: 0, gamesWon: 0
			});
		});

		const onResetRound = () => setState(prevState => ({
			...prevState, score: 0
		}));

		window.addEventListener("resetGame", onResetGame);
		window.addEventListener("resetRound", onResetRound);
		return () => {
			window.removeEventListener("resetGame", onResetGame);
			window.removeEventListener("resetRound", onResetRound);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Update local storage on every state change
	useEffect(() => {
		localStorage.setItem(playerId, JSON.stringify(state));
	}, [state, playerId]);


	useEffect(() => {
		if(state.score === maxScore) {

			if (state.gamesWon + 1 === bestOf)
				return setWinner(playerId);


			dispatchEvent(new CustomEvent("resetRound"));
			setState(prevState => ({
				...prevState, gamesWon: state.gamesWon + 1
			}));
		}
	}, [state.score]);

	const scoreUp = () => setState(prevState => ({
		...prevState,
		score: ++state.score
	}));

	const scoreDown = () => setState(prevState => ({
		...prevState,
		score: state.score === 0 ? state.score : --state.score
	}));

	const updateName = (name: string) => setState(prevState => ({
		...prevState, name
	}));

	return {
		...state, scoreUp, scoreDown, updateName
	};


}

export default usePlayerScore;