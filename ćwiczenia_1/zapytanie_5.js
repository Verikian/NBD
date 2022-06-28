let bornInXXI = db.people.aggregate([{
    $match: {
        $expr: {
            $gte: [{
                $toDate: "$birth_date"
            }, ISODate("2001-01-01T00:00:00Z")]
        }
    }
},
{
    $project: {
        city: "$location.city",
        first_name: 1,
        last_name: 1
    }
}
]).toArray()

printjson(bornInXXI)