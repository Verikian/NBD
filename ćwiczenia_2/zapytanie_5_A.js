printjson(db.people.aggregate([{
        $match: {
            sex: "Female",
            nationality: "Poland"
        }
    },
    {
        $unwind: "$credit"
    },
    {
        $group: {
            _id: "$credit.currency",
            sumBalance: {
                $sum: {
                    $toDouble: "$credit.balance"
                }
            },
            avgBalance: {
                $avg: {
                    $toDouble: "$credit.balance"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            currency: "$_id",
            sum: "$sumBalance",
            avg: "$avgBalance"
        }
    }
]).toArray())