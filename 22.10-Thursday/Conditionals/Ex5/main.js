/* wikipedia just taught me that short-circuit evaluation in JS will not result in a boolean,
 but it will result in the last value, if so, my assumptions are these:
 a = 3
 b = 15
 c = 12
 d = 160 */
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2
console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
console.log("d = "+d);