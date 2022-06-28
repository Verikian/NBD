// mapowanie
let mapBMI = function () {
    let bmi = parseFloat(this.weight) / Math.pow(parseFloat(this.height / 100), 2);
    emit(this.nationality, {
        count: 1,
        sumBMI: bmi,
        minBMI: bmi,
        maxBMI: bmi
    });
};

// redukcja
let reduceBMI = function (key, values) {
    let reducedVal = values[0];
    for (let idx = 1; idx < values.length; idx++) {
        let newVal = values[idx];
        reducedVal.count += newVal.count;
        reducedVal.sumBMI += newVal.sumBMI;
        reducedVal.minBMI = Math.min(reducedVal.minBMI, newVal.minBMI);
        reducedVal.maxBMI = Math.max(reducedVal.maxBMI, newVal.maxBMI);
    }
    return reducedVal;
};

// finalizacja
let finalizeBMI = function (key, reducedVal) {
    reducedVal.avgBMI = reducedVal.sumBMI / reducedVal.count;
    return reducedVal;
};

// Map-Reduce
printjson(db.people.mapReduce(mapBMI, reduceBMI, {
    out: "statsBMI",
    finalize: finalizeBMI
}));

printjson(db.statsBMI.find({}, {
    "value.avgBMI": 1,
    "value.minBMI": 1,
    "value.maxBMI": 1
}).toArray());