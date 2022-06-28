// mapowanie
let mapJobs = function () {
    emit(this.job, 1);
};

// redukcja
let reduceJobs = function (key, value) {
    return Array.sum(value);
};

// Map-Reduce
printjson(db.people.mapReduce(mapJobs, reduceJobs, {
    out: "uniqueJobs"
}));

printjson(db.uniqueJobs.find().toArray().map((value => value._id)));