let bmi = {
    $divide: [{
            $toDouble: "$weight"
        },
        {
            $pow: [{
                $divide: [{
                    $toDouble: "$height"
                }, 100]
            }, 2]
        }
    ]
}

printjson(db.people.aggregate([{
        $group: {
            _id: "$nationality",
            avgBMI: {
                $avg: bmi
            },
            minBMI: {
                $min: bmi
            },
            maxBMI: {
                $max: bmi
            }
        }
    },
    {
        $project: {
            _id: 0,
            nationality: "$_id",
            averageBMI: "$avgBMI",
            minimumBMI: "$minBMI",
            maximumBMI: "$maxBMI"
        }
    }
]).toArray())