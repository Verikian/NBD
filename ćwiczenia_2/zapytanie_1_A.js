printjson(db.people.aggregate([{
    $group: {
        _id: "$sex",
        avgWeight: {
            $avg: {
                $toDouble: "$weight"
            }
        },
        avgHeight: {
            $avg: {
                $toDouble: "$height"
            }
        }
    }
}, {
    $project: {
        _id: 0,
        sex: "$_id",
        average_weight: "$avgWeight",
        average_height: "$avgHeight"
    }
}]).toArray())