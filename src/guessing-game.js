class GuessingGame {
    constructor() {
        }
    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.result = 0;
    }

    guess() {
        let res = Math.round((this.max + this.min) / 2);
        this.result = res; 
        return res;
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}


module.exports = GuessingGame;
