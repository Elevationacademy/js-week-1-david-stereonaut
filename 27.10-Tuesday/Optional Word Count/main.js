const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const cleanStr = function(str){
    for (char of specialChars){
        str = str.split(char).join('')
    }
    return str.toLowerCase()
}


const countWords = function(str){
    let splitStr = str.split(' ')
    for (word of splitStr){
        if (wordCounts[word] == undefined){
            wordCounts[word] = 1;
        } else {
            wordCounts[word] ++;
        }
    }
}

const WordCount = function(str){
    countWords(cleanStr(str))
}
WordCount(story)
console.log(wordCounts)