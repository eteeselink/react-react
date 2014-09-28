
class HeadCount {
    constructor(refreshView, initialTotal, limiter) {
        this._total = initialTotal;
        this._amount = initialTotal;
        this._limiter = limiter;
        this._refreshView = refreshView;
    }

    total() {
        if(this._limiter) {
            return this._limiter.amount();
        }
        else {
            return this._total;
        }
    }

    amount() {
        return Math.min(this.total(), this._amount);
    }
    
    setAmount(amount) { 
        this._amount = amount; 
        this._refreshView();
    };
}

class HeadCounts {
    constructor(refreshView) {
        var totalPeople = 25;
        this.js10 =  new HeadCount(refreshView, totalPeople);
        this.js500 = new HeadCount(refreshView, totalPeople, this.js10);
        this.spwa =  new HeadCount(refreshView, totalPeople, this.js500);
    }
}

module.exports = HeadCounts;
