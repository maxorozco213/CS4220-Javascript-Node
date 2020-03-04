// built in node module that allows for interacting with the file system
const fs = require('fs');
// built in module that provides utilities for working with file and directory paths.
const path = require('path');
// Reading Files and Taking Actions
const files = ['large.txt', 'medium.txt', 'small.txt'];
const keyWords = ['javascript', 'node', 'programming', 'language'];
const countObject = {};

wordCount = (word) => {
    keyWords.forEach(key => {
        if (key.toLowerCase() === word.toLowerCase()) {
            countObject[key] = (countObject[key] + 1 || 1);
        }
    })
}

const countKeyWords = (files) => {
    files.forEach(file => {
    const fullPath = path.resolve('./lab/', file)

        fs.readFile(fullPath, 'utf8', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                let wordArray = result.split(' ');
                wordArray.forEach(word => {
                    wordCount(word);
                })
            }
        });
    })
}

countKeyWords(files);

setTimeout(() => {
    console.log(countObject);
}, 1000)


