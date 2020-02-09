const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];

function countingLetters(quote, punctuation) {
    let letterCountObj = {};

    for (let i = 0; i < quote.length; i++) {
        let tmp = quote.charAt(i);

        if (!punctuation.includes(tmp) && !letterCountObj.keys().includes(tmp)) {
            letterCountObj[tmp] = 1;
        }
    }

    return letterCountObj;
}

let answer = countingLetters(quote, punctuations);
console.log(answer);