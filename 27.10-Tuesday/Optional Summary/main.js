people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); 
    capitalizedStr += str.slice(1) 
    return capitalizedStr
}

const getAge = function(num){
    if (num >= 55){
        return "a 55+"
    } else if (num < 21){
        return "an underage"
    } else {
        return `${num} year old`
    }
}

const capProf = function(str){
    let splitStr = str.split(' ');
    let newStr = '';
    for (i of splitStr){
        newStr += `${capitalize(i)} `
    }
    return newStr
}

const capAddress = function(country, city){
    return `${capitalize(city)}, ${capitalize(country)}`
}

const catchPhraseSum = function(name, phrase){
    return `${capitalize(name)} loves to say "${capitalize(phrase)}"`
}

const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} `
    summary += capProf(person.profession)
    summary += `from ${capAddress(person.country, person.city)}. `
    summary += `${catchPhraseSum(person.name, person.catchphrase)}.`
    return summary
}

for (person of people_info){
    console.log(getSummary(person))
}