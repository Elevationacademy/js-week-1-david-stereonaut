let p1 = {
    name: 'Jill',
    age: 25,
    city: 'Afuli'
}
let p2 = {
    name: 'Robert',
    age: 25,
    city: "Be'er Tuvia"
}
if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log("Jill wanted to date Robert")
    } else {
        console.log("Jill wanted to date Robert, but couldn't")
    }
}