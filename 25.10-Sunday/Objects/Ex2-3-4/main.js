let myList = [
    {life: 'work', tinok: 'matok'}, {life: 'fun', tinok: 'schmok'}
]
console.log(myList);
myList[0].life = 'fun'
myList.splice(1, 1)
console.log(myList)
let my2ndList = [
    {life: 'work', tinok: 'schmok'}, {life: 'weird', tinok: 'the hulk?'}
]
myList.push(...my2ndList);
console.log(myList)
let library = {
    books: [
        {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams"}, {title: "1984", author: "George Orwell"}, {title: "The Art of War", author: "Sun Tzu"}
    ]
}
myList.push(...library.books);
console.log(myList)