// mapowanie
let mapBalanceByCurrency = function () {
    for (let idx = 0; idx < this.credit.length; idx++) {
        let key = this.credit[idx].currency;
        let values = {
            count: 1,
            sumBalance: parseFloat(this.credit[idx].balance)
        };
        emit(key, values);
    }
};

// redukcja
let reduceBalanceByCurrency = function (key, value) {
    reducedVal = {
        count: 0,
        sumBalance: 0
    };
    for (let idx = 0; idx < value.length; idx++) {
        reducedVal.count += value[idx].count;
        reducedVal.sumBalance += value[idx].sumBalance;
    }
    return reducedVal;
};

// finalizacja
let finalizeBalanceByCurrency = function (key, reducedVal) {
    reducedVal.avgBalance = reducedVal.sumBalance / reducedVal.count;
    return reducedVal;
};

// Map-Reduce
printjson(db.people.mapReduce(mapBalanceByCurrency, reduceBalanceByCurrency, {
    out: "womenBalanceInPoland",
    query: {
        sex: "Female",
        nationality: "Poland"
    },
    finalize: finalizeBalanceByCurrency
}));

printjson(db.womenBalanceInPoland.find({}, {"value.sumBalance": 1, "value.avgBalance": 1}).toArray());