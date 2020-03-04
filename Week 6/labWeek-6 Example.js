// built in node module that allows for interacting with the file system
const fs = require('fs');
// built in module that provides utilities for working with file and directory paths.
const path = require('path');
// Reading Files and Taking Actions
const files = ['large.txt', 'medium.txt', 'small.txt'];


const wordCount = (files) => {
    files.forEach(file => {
    const fullPath = path.resolve('./files', file)

        fs.readFile(fullPath, 'utf8', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const wordArray = result.split(' ');
                const wordCount = wordArray.length;
                console.log(`${file}`, wordCount);
            }
        });
    })
}

wordCount(files);

// module designed to support features of the http protocol.
const http = require('http');


// Simple HTTP GET Request


// HTTP GET Request with Looping over URLs
const urls = [
    'http://www.google.com/',
    'http://www.spotify.com/us/',
    'http://twitter.com/',
    'http://google.com/error',
    'http://reddit.com/',
    'http://google.com/error_again',
    'http://www.bing.com/'
];

const fetch = (url, callback) => {
    http.get(url, res => {
        callback(res.statusCode)
    }).on('error', err => {
        console.log(err);
    })
}

getTimes = (urls) => {
const start = new Date();

    urls.forEach(url => {
        fetch(url, statusCode => {
            const end = new Date();
            const responseTime = end - start;
            console.log(`${url}, | ${statusCode} | ${responseTime}`)
        })
    })
}

getTimes(urls);