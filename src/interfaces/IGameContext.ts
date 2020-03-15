export enum Winner {none , p1 , p2 }

export type MaxScoreValues = 7 | 11 | 15 | 21;
export type BestOfValues = 3 | 5 | 7;

export interface IGameContextState {
	maxScore: MaxScoreValues;
	bestOf: BestOfValues;
	winner: Winner;
	isStarted: boolean;
}

export interface IGameContextMethods {
	setWinner: (winner: keyof typeof Winner) => void;
	setMaxScore: (maxScore: MaxScoreValues) => void;
	setBestOf: (bestOf: BestOfValues) => void;
	setIsStarted: (started: boolean) => void;
}

type IGameContext = IGameContextState & IGameContextMethods

export default IGameContext;