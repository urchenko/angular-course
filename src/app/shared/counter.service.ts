export  class CounterService {
    switchToActiveCounter: number = 0;
    switchToInActiveCounter: number = 0;

    onSwitchToActive() {
        this.switchToActiveCounter++;
        console.log(`Switched to active was: ${this.switchToActiveCounter} times!`);
    }

    onSwitchToInActive() {
        this.switchToInActiveCounter++;
        console.log(`Switched to inactive was: ${this.switchToInActiveCounter} times!`);
    } 
}