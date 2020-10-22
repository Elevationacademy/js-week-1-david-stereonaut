// My assumption - b = 0, c = 2, a = 0
// Test:
let a = 3;
a = 4;
let c = 0;
let b = a;
b = 2;
a = b;
b = c;
c = a;
a = b;
console.log("a is " + a + ", b is " + b + " and c is " + c);