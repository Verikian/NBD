// mapowanie
let mapBalanceByCurrency = function () {
    for (let idx = 0; idx < this.credit.length; idx++) {
        let key = this.credit[idx].currency;
        let value = parseFloat(this.credit[idx].balance);
        emit(key, value);
    }
};

// redukcja
let reduceBalanceByCurrency = function (key, value) {
    return Array.sum(value);
};

// Map-Reduce
printjson(db.people.mapReduce(mapBalanceByCurrency, reduceBalanceByCurrency, {
    out: "sumOfBalances"
}));

printjson(db.sumOfBalances.find().toArray());