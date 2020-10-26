// Spot Check 1 
let car = {
    color: 'rust colored',
    numWheels: 3,
    isFancy: false,
}
if (car.isFancy) {
    console.log(`The ${car.color} car has ${car.numWheels} wheels. It is fancy`)
} else {
    console.log(`The ${car.color} car has ${car.numWheels} wheels. It is not fancy`)
} 

// Spot Check 2 
let itemList = {
    item: 'pirulu stick',
    toBeginning: true,
    items: ['medusa', 'magnesium', 'ventilator']
}
if (itemList.toBeginning) {
    itemList.items.unshift(itemList.item)
} else {
    itemList.items.push(itemList.item)
}
console.log(itemList.items); 

// Spot Check 3
const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"
human[babyNameKey] = babyNameValue
console.log(human.name); 
human.name = "Stalin"
console.log(human.name); 