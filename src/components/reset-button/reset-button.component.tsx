import React, {FC, useContext} from 'react';
import {GameContext} from "../../context/GameContext";
import styles from './reset-button.module.scss';


const ResetButton: FC = () => {

	const game = useContext(GameContext);

	const onResetGame = () => {
		if (!!game.winner || window.confirm("Reset the game?")) {
			dispatchEvent(new CustomEvent("resetGame"));
			game.setIsStarted(false);
		}
	};

    return (
	    <button className={styles.root} onClick={onResetGame}>
		    Reset Game
	    </button>
    );
};


export default ResetButton;