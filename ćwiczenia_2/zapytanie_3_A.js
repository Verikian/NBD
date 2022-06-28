printjson(db.people.aggregate([{
        $group: {
            _id: null,
            uniqueJobs: {
                $addToSet: "$job"
            }
        }
    }, {
        $unwind: "$uniqueJobs"
    },
    {
        $project: {
            _id: 0
        }
    }
]).toArray().map(value => value.uniqueJobs));