printjson(db.people.aggregate([
    {$unwind: "$credit"},
    {
    $group: {
        _id: "$credit.currency",
        balanceTotal: {
            $sum: {
                $toDouble: "$credit.balance"
            }
        }
    }
}, {
    $project: {
        _id: 0,
        currency: "$_id",
        total_balance: "$balanceTotal"
    }
}]).toArray())