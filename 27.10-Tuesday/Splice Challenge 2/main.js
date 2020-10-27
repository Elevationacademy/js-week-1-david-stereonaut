Array.prototype.splice = function(start, deleteCount, ...items){
    const a = [...this]
    this.length = 0
    const deletedArr = []
    if (start >= a.length) {
        start = a.length
    }
    if (start < 0) {
        let negStart = a.length + start
        if (negStart < 0) {
            start = 0
        } else {
            start = negStart
        }
    }
    if (deleteCount == undefined || deleteCount >= (a.length - start)) {
        deleteCount = a.length
    }
    if (!(start == 0)){
        for (let i = 0; i < start; i++){
            this.push(a[i])
        }
    }
    for(i of items){
        this.push(i)
    }
    let counter = 0;
    for (let j = start; j < a.length; j++){
        if (counter < deleteCount){
            deletedArr.push(a[j])
            counter++
        } else {
            this.push(a[j])
        }
    }
    return deletedArr
}
// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]


// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 
