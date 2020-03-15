import React, {FC, useContext, useEffect} from 'react';
import styles from './score-screen.module.scss';
import {Player1Context} from "../../context/Player1ContextProvider";
import {Player2Context} from "../../context/Player2ContextProvider";
import PlayerScore from "../player-score/player-score.component";
import {GameContext} from "../../context/GameContext";


const ScoreScreen: FC = () => {

	const game = useContext(GameContext);
	const player1 = useContext(Player1Context);
	const player2 = useContext(Player2Context);

	useEffect(onPlayerScore, [player1.score, player2.score]);

	return (
        <div className={styles.root}>
	        <PlayerScore {...player1} playerNum={1}/>
	        <PlayerScore {...player2} playerNum={2}/>
        </div>
    );

	function onPlayerScore() {
		if ((!!player1.score || !!player2.score) && !game.isStarted)
			game.setIsStarted(true);

		if (player1.score) {

		}
	}
};


export default ScoreScreen;