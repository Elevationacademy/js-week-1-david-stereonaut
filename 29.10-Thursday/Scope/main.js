//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles") // Finished running 8 miles
}


console.log("Damn, you see this gal? She ran " + distance + " miles")    //distance will be undefined because its in the "if" local scope

//===================================================================================
//Section 2
//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound) // cowSound is a variable in the local scope of the "if" and not the "else", which means it does not exists in the "else" block. because 13 isnt equal to space we will get "Cow says undefined"
}

//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder) //specialOrder is a local variable in the "for" loop, as well as order
    }

    console.log("Finished serving all the orders: " + orders) //orders is a local reference of the function to the global allOrders
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders) //everything will work fine - it will print a string "Served a special whatever" for every item and then a string with the allOrders array in it, because we arent using variables outside of their scope.

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed" //seed is a local variable of this function, therefore we cannot use it outside of the function, and this function does nothing
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot) //seed doesnt exist in this block, but pot is global so it does
}

plant() // will print "Planting the undefined inside a red pot with earth in it" kind of philisophical i'd say

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }] //this is a local array of the doesUserExist function
    for (let u of users) {
        if (u.name == name) { //name is a local reference in the function for the string it got as an argument, since the for loop is a child of that function it can access name
            const found = true
        }
    }
    return found 
}

const userExists = doesUserExist("Lucius") //will return true for 'Lucius' as an argument for the function
if (userExists) {
    console.log("We found the ragamuffin!") // this will be the result of this code, because the function compares the argument it got to the local array "users" that it created inside itself.
}
else {
    console.log("No idea where this person is.")
}

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
} // this whole function is just a weird way of making isEnough true, because its a global variable so the function can access it

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh") // this will be the result
}
else {
    console.log("Here we go again...")
}
