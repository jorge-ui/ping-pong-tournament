import React, {FC, useContext} from "react";
import {GameContext} from "../../context/GameContext";
import styles from "./game-options.module.scss";
import {BestOfValues, MaxScoreValues} from "../../interfaces/IGameContext";


const maxScoresValues: MaxScoreValues[] = [7, 11, 15, 21];
const bestOfValues: BestOfValues[] = [3, 5, 7];

const GameOptions: FC = () => {
	const gameContext = useContext(GameContext);

	const handleMaxScoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		let {value} = e.target;
		gameContext.setMaxScore(Number(value) as MaxScoreValues);
	};
	const handleBestOfChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		let {value} = e.target;
		gameContext.setBestOf(Number(value) as BestOfValues);
	};

	return (
		<div className={styles.root}>
			<div className={styles.gameOption}>
				<label htmlFor="game-points">Points:</label>
				<select id="game-points" onChange={handleMaxScoreChange}>
					{maxScoresValues.map(value => {
						let selected = value === gameContext.maxScore;
						return (
							<option key={value} value={value} selected={selected}>
								{value}
							</option>
						);
					})}
				</select>
			</div>
			<div className={styles.gameOption}>
				<label htmlFor="game-best-of">Best of:</label>
				<select id="game-best-of" onChange={handleBestOfChange}>
					{bestOfValues.map(value => {
						let selected = value === gameContext.bestOf;
						return (
							<option key={value} value={value} selected={selected}>
								{value}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default GameOptions;
