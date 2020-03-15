import React, {FC, useContext} from 'react';
import IPlayerContext from "../../interfaces/IPlayerContext";
import styles from './player-options.module.scss';


interface OwnProps {
	playerContext:  React.Context<IPlayerContext>
}

type Props = OwnProps;

const PlayerOptions: FC<Props> = ({playerContext}) => {
	const {updateName, name} = useContext(playerContext);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		let {value} = e.target;
		updateName(value);
	}

    return (
	    <div className={styles.root}>
		    <input type="text" value={name} onChange={handleChange}/>
	    </div>
    );
};


export default PlayerOptions;