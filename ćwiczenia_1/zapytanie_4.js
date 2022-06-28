let weightRange = db.people.find({
    $expr: {
        $and: [{
                $gte: [{
                    $toDouble: "$weight"
                }, 68]
            },
            {
                $lt: [{
                    $toDouble: "$weight"
                }, 71.5]
            }
        ]
    }
}).toArray()

printjson(weightRange)