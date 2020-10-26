const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (key of Object.keys(dictionary)) {
  console.log(`Words that begin with ${key}:`)
  for (word of dictionary[key]){
    console.log(`    ${word}`)
  }
}