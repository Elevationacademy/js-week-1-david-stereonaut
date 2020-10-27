const isNumInArr = function(arr, num){
    let bool = false
    for (i of arr){
        if (num == i){
            bool = true
        }
    }
    return bool
}
let bool = isNumInArr([1, 2, 3], 2)