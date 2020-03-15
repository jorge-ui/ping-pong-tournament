import React, {FC, useContext} from 'react';
import {GameContext} from "../../context/GameContext";
import {Player1Context} from "../../context/Player1ContextProvider";
import {Player2Context} from "../../context/Player2ContextProvider";
import {Winner} from "../../interfaces/IGameContext";
import IPlayerContext from "../../interfaces/IPlayerContext";
import styles from './win-screen.module.scss';
import ResetButton from "../reset-button/reset-button.component";


const WinScreen: FC = () => {
	const game = useContext(GameContext);
	const player1 = useContext(Player1Context);
	const player2 = useContext(Player2Context);
	let winner: IPlayerContext | undefined;

	if (game.winner)
		winner = game.winner === Winner.p1 ? player1 : player2;

    return !!winner ? (
        <div className={styles.root}>
	        <h3 className={styles.heading}>{winner.name}</h3>
	        <h4 className={styles.heading}>Wins</h4>
	        <ResetButton/>
        </div>
    ) : null;
};


export default WinScreen;