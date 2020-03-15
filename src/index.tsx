import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Player1ContextProvider from "./context/Player1ContextProvider";
import Player2ContextProvider from "./context/Player2ContextProvider";
import GameContextProvider from "./context/GameContext";


const AppWithContexts = () => (
	<GameContextProvider>
		<Player1ContextProvider>
			<Player2ContextProvider>
				<App/>
			</Player2ContextProvider>
		</Player1ContextProvider>
	</GameContextProvider>
);

ReactDOM.render(<AppWithContexts />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
