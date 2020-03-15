import React from "react";
import IPlayerContext from "../interfaces/IPlayerContext";
import usePlayerScore from "../custom-hooks/usePlayerScore";

// @ts-ignore
export const Player2Context: React.Context<IPlayerContext> = React.createContext<IPlayerContext>();

const Player2ContextProvider: React.FC = (props) => {

	const playerContext = usePlayerScore("p2");

	return (
		<Player2Context.Provider value={playerContext}>
			{props.children}
		</Player2Context.Provider>
	);
};

export default Player2ContextProvider;