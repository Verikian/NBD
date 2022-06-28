let removeHeightGT190 = db.people.deleteMany({
    height: {
        $gt: "190.00"
    }
})

printjson(removeHeightGT190)