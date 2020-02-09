const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];

function countingLetters(quote, punctuation) {
    let letterCountObj = {};

    for (let i = 0; i < quote.length; i++) {
        let tmp = quote.charAt(i).toLowerCase();

        if (!punctuation.includes(tmp)) {
            letterCountObj[tmp] = (letterCountObj[tmp] + 1 || 1);
        }
    }

    return letterCountObj;
}

let answer = countingLetters(quote, punctuations);
console.log("Question 4\n", answer);
console.log("\n-----------------------------------------------------------------\n");

function compareArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    } else if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                return true
            }
        }
    }

    return false;
}

let results = [];

const a1 = [1, 2, 3];
const a2 = [1, 2, 3];
results.push(compareArray(a1, a2));

const b1 = [1, 2, 3];
const b2 = ['1', '2', '3'];
results.push(compareArray(b1, b2));

const c1 = [1, 2, 3, 4];
const c2 = [1, 2, 3];
results.push(compareArray(c1, c2));

const d1 = [1, 2, 3];
const d2 = [3, 2, 1];
results.push(compareArray(d1, d2));

console.log("Question 5\n", results);
console.log("\n-----------------------------------------------------------------\n");

const game_array = [
    [ 'developer', 'Respawn' ],
    [ 'producer', 'EA' ],
    [ 'game', 'Star Wars Jedi: Fallen Order' ],
    [ 'year', 2019 ]
];

function convertToObject(gameArray) {
    let gameObj = {};

    gameArray.forEach((i) => {
        gameObj[i[0]] = i[1];
    });

    return gameObj;
}

console.log("Question 6\n", convertToObject(game_array));
console.log("\n-----------------------------------------------------------------\n");

const products = [
    [{
        property: 'product',
        assign: 'PS4'
    },
    {
        property: 'company',
        assign: 'Sony'
    },
    {
        property: 'release',
        assign: '2013'
    }],

    [{
        property: 'product',
        assign: 'Xbox One X'
    }, {
        property: 'company',
        assign: 'Microsoft'
    }, {
        property: 'release',
        assign: '2016'
    }],
    [{
        property: 'product',
        assign: 'Switch'
    }, {
        property: 'company',
        assign: 'Nintendo'
    }, {
        property: 'release',
        assign: '2017'
    }]
];

function buildObject(productArr) {
    let prodObj = {};
    let innerObj = {};

    for (let i = 0; i < productArr.length; i++) {
        let objKey = i+1;
        prodObj[objKey] = productArr[i];
        // console.log("Object", prodObj);

        for (let j = 0; j < 3; j++) {
            let property = prodObj[objKey][j]['property'];

            prodObj[property] = prodObj[objKey][j]['assign'];

            // console.log(property);
            // console.log(value);
            console.log(prodObj)
        }
    }

    // console.log("poo", prodObj);
    // console.log(prodObj[1][0]['property']);
    // console.log(prodObj[1][1]['property']);
    // console.log(prodObj[1][2]['property']);
    // console.log(prodObj[1][0]['assign']);
    // console.log(prodObj[1][1]['assign']);
    // console.log(prodObj[1][2]['assign']);

    return prodObj;
}

buildObject(products);
// console.log(buildObject(products));
