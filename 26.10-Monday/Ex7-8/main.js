const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (i in names){
    people.push({name: names[i], age: ages[i]})
}

for (i in people){
    console.log(`${people[i].name} is ${people[i].age} years old`)
}