import React, {FC, useContext} from 'react';
import styles from './main-menu.module.scss';
import PlayerOptions from "../player-options/player-options.component";
import {Player2Context} from "../../context/Player2ContextProvider";
import {Player1Context} from "../../context/Player1ContextProvider";
import {GameContext} from "../../context/GameContext";
import GameOptions from "../game-options/game-options.component";
import ResetButton from "../reset-button/reset-button.component";


const MainMenu: FC = () => {

	const game = useContext(GameContext);

    return (
        <div className={styles.root}>
	        <h1 className={styles.title}>Ping Pong Tournament</h1>
	        <div className={styles.players}>
		        <div>
			        <h3 className={styles.playerHeading}>Player 1</h3>
			        <PlayerOptions playerContext={Player1Context}/>
		        </div>
		        <div>
			        <h3 className={styles.playerHeading}>Player 2</h3>
			        <PlayerOptions playerContext={Player2Context}/>
		        </div>
	        </div>
	        {game.isStarted ?
		        <ResetButton/> :
		        <GameOptions/>
	        }
        </div>
    );
};


export default MainMenu;