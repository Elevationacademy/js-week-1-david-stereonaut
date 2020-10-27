const calcAge = function(year, birthYear){
  let age = year - birthYear
  console.log(`You are either ${age} or ${age - 1} years old`)
  return age
}
const age = calcAge(2017, 1989)