// Question 1
const phrase = 'helxlo x worxxld';
const letter = 'x';

function removeLetters(word, letter) {
    let newWord = word.split(letter).join("");
    return newWord;
}

console.log(removeLetters(phrase, letter));

// Question 2
const nested = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];

function flattenArray(array) {
    let output = []
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            output.push(array[i][j]);
        }
    }

    return output;
}

console.log(flattenArray(nested));


// Question 3
const dc = {
    name: ['Bruce', 'Wayne'],
    hero: 'Batman'
};
const marvel = {
    name: ['Peter', 'Benjamin', 'Parker'],
    hero: 'SpiderMan'
};

function adjustName(object) {
    const firstName = object.name.shift();
    const lastName = object.name.pop();

    object.firstName = firstName;
    object.lastName = lastName;

    delete object.name;
    return object;
}

console.log(adjustName(dc));
console.log(adjustName(marvel))