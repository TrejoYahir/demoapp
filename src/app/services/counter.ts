export class CounterService {
    private counterHistory:any = [];

    addCounter(counter) {
        this.counterHistory.push(counter);
        console.log(this.counterHistory);        
    }

    removeCounter(counter) {

        const position = this.counterHistory.findIndex((counterElement) => {
            return counterElement.id == counter.id;
        });

        this.counterHistory.splice(position, 1);
    }

    getHistory() {
        return this.counterHistory.slice();
    }

}