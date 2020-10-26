let nums = []
for (i = 1; i <= 100; i++){
    nums.push(i)
}

for (num of nums){
    if (!(num%2 == 0)){
        console.log(num)
    }
}