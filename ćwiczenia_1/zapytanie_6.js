let insertAdam = db.people.insert({
    sex: "Male",
    first_name: "Adam",
    last_name: "Sitko",
    job: "Environmental Engineer",
    email: "s25551@pjwstk.edu.pl.com",
    location: {
        city: "Krakow",
        address: {
            streetname: "Mieszka I",
            streetnumber: "98"
        }
    },
    description: "dura lex, sed lex",
    height: "174.00",
    weight: "65.7",
    birth_date: "1991-01-06T17:53:28Z",
    nationality: "Poland",
    credit: [{
        type: "visa-electron",
        number: "4683130033215789",
        currency: "PLN",
        balance: "1313.13"
    }]
})

printjson(insertAdam)
printjson(db.people.findOne({
    first_name: "Adam",
    last_name: "Sitko"
}))