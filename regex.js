const a = /gaurav/;
const val = "Hi I am gaurav";
//const result = a.test(val); // the result is case sensitive
const orTesting = "I love dogs, cats and goats";
const orRegex = /dog|cat/;
const orRegexIgnore = /Dog|Cat/i; // added an i to ignore case
//console.log(orRegexIgnore.test(orTesting));

const extractStr = "Extract the word coding from the string";
const regexExtract = /coding/;
//console.log(extractStr.match(regexExtract));

const mulStr = "Twinkle, twinkle little star";
const regexMul = /twinkle/gi;
//console.log(mulStr.match(regexMul));

// in regex a period (.) is a wild card character
const hum = "I will hum a song";
const hug = "Bear hugs";
const regexPeriod = /hu./;
// console.log(hug.match(regexPeriod));

const bgRegex = /b[aui]g/g; // it matches a letter a, u, i
const rangeReg = /b[a-i]g/; // it matches between a to i
const numLetter = /b[2-6l-z]/; // all the number between 2 to 6, and letters from l to z are matched
const negation = /[^aeiou1-10]/;
const numberOfTimes = /[Aa*]/; // matches a 0 or more times
const matchALetterMultipleTimes = /s+/g; // output [ 'ss', 'ss' ]
const miss = "mississipi";
const singleLetterStr = "I have a bag. It is very big";
//console.log(miss.match(matchALetterMultipleTimes));

// greedy and lazy matches
const titanic = "titanic";
const greedy = /t[a-z]*i/; // longest match
const lazy = /t[a-z]*?i/; // shortest match
const firstRegex = /^Cat/; // matches first part of the string
const endRegex = /nana$/; // matches the endof the string
const allLetters = /\w/g; //all the small and capital letters including underscores
const notAllLetters = /\W/g; // other than what it gives in \w
const digitsRegex = /\d/; //for digits
const nonDigitsRegex = /\D/; //for non digits
const username = /[A-Za-z]{2,}\d*$/; // a username with letters in the starting, and numbers at the end
const spacesRegex = /\s/g; // white space character
const nonspacesRegex = /\S/g; // non white space character
const exactNumberRegex = /Tim{5}ber/; // for exact number of 5 ms'
const favouriteRegex = /favou?rite/;

const posLookAheadRegex = /q(?=u)/; // returns q if u exists after q
const negLookAheadRegex = /q(!=u)/; // returns q if u doesn't exists after q
const greaterThanFive = /(?=\w{5})(?=\D*\d{2})/;
const mulRegex = /(\w+)\s\1/;
console.log(titanic.match(lazy));
