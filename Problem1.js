// Import the "readFileSync" and "writeFileSync" from fs file
const { readFileSync, writeFileSync } = require('fs');

// line below is importing the fs module 
const fs = require('fs');

// Reads the text within the first file and put it in a variablle 
const first = readFileSync('./content/first.txt', 'utf8');

// Reads the text within the second file and put it in a variable 
const second = readFileSync('./content/second.txt', 'utf8');

// Allows you to see the variable in the console
console.log(first, second);

// Puts out the mixed result of the first and second variable to a new file 
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`);

// Appending the concatenated result of 'first' and 'second' to the existing 'result-sync.txt' file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });
