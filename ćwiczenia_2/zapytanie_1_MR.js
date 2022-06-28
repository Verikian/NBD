// mapowanie
let mapWHBySex = function () {
    emit(this.sex, {
        count: 1,
        weight: parseFloat(this.weight),
        height: parseFloat(this.height)
    });
};

// redukcja
let reduceWHBySex = function (key, values) {
    reducedVal = {
        count: 0,
        weight: 0,
        height: 0
    };
    for (let idx = 0; idx < values.length; idx++) {
        reducedVal.count += values[idx].count;
        reducedVal.weight += values[idx].weight;
        reducedVal.height += values[idx].height;
    }
    return reducedVal;
};

// finalizacja
let finalizeWHBySex = function (key, reducedVal) {
    reducedVal.avgWeight = reducedVal.weight / reducedVal.count;
    reducedVal.avgHeight = reducedVal.height / reducedVal.count;
    return reducedVal;
};

// Map-Reduce
printjson(db.people.mapReduce(mapWHBySex, reduceWHBySex, {
    out: "avgWeightHeight",
    finalize: finalizeWHBySex
}));

printjson(db.avgWeightHeight.find({}, {
    "value.avgWeight": 1,
    "value.avgHeight": 1
}).toArray());