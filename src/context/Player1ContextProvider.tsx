import React from "react";
import IPlayerContext from "../interfaces/IPlayerContext";
import usePlayerScore from "../custom-hooks/usePlayerScore";

// @ts-ignore
export const Player1Context: React.Context<IPlayerContext> = React.createContext<IPlayerContext>();

const Player1ContextProvider: React.FC = (props) => {

	const playerContext = usePlayerScore("p1");

	return (
		<Player1Context.Provider value={playerContext}>
			{props.children}
		</Player1Context.Provider>
	);
};

export default Player1ContextProvider;