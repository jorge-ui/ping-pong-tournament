export interface IPlayerMethods {
	scoreUp: () => void;
	scoreDown: () => void;
	updateName: (name: string) => void;
}

export interface IPlayerState {
	score: number;
	name: string;
	gamesWon: number
}

type IPlayerContext = IPlayerState & IPlayerMethods;

export default IPlayerContext;