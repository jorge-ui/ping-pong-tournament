import React, {FC, useContext} from "react";
import IPlayerContext from "../../interfaces/IPlayerContext";
import styles from "./player-score.module.scss";
import {useDrag} from "react-use-gesture";
import {GameContext} from "../../context/GameContext";

interface OwnProps {
	playerNum: number;
}

type Props = IPlayerContext & OwnProps;

const PlayerScore: FC<Props> = ({name, score, scoreUp, scoreDown, playerNum, gamesWon}) => {
	const game = useContext(GameContext);

	const bind = useDrag(({swipe}) => {
		const swipeY = swipe[1];
		if (swipeY) swipeY < 0 ? scoreUp() : scoreDown();
	});

	return (
		<div className={styles.root} {...bind()}>
			<h3 className={styles.playerName}>
				{name ? name : `Player ${playerNum}`}
			</h3>
			<div className={styles.playerScore}>{score}</div>
			<div className={styles.bestOf}>
				{[...new Array(game.bestOf)].map((v, i) => {
					let roundWon = (i+1) <= gamesWon;
					// @ts-ignore
					return (<span key={i} won={String(roundWon)} />);
				})}
			</div>
		</div>
	);
};

export default PlayerScore;
