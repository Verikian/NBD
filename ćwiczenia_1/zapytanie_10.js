let deleteEmails = db.people.update({
    job: "Editor"
}, {
    $unset: {
        email: 1
    }
}, {
    multi: true
})

printjson(deleteEmails)