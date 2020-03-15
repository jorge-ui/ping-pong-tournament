declare global {
	function addEventListener<K extends keyof CustomEventMap>(type: K, listener: () => any): void;
	function removeEventListener<K extends keyof CustomEventMap>(type: K, listener: () => any): void;
}

interface CustomEventMap {
	"resetGame": Event;
	"resetRound": Event;
}