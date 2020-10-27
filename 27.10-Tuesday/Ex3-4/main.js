const isEven = function(num){
    return Boolean(num%2 == 0 )
}

const findOdds = function(nums){
    for (num of nums){
        if (!(isEven(num))){
            console.log(num)
        }
    }
}

const nums = [1, 4, 6, 23, 4, 84, 4, 5, 67, 43]
findOdds(nums)