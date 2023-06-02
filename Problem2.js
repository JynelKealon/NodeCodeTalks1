// Import the "readFileSync" and "writeFileSync" from fs file
const { readFileSync, writeFileSync } = require('fs');

// Prints start to the console
console.log('start');

//Reads the information in the first file asynchronously 
readFile('./content/secont.txt', 'utf8', (err, result)=> {
    if (err) {
        console.log(err);
        return;
    }
    // using a nested callback function to read the second file 
    const first = result;
    console.log(result);

});

// Reads the information in the second file asynchronously 
readFile('./content/second.txt', 'utf8', (err, result)=> {
    if (err) {
        console.log(err);
        return;
    }
// Using a nested callback function to add the result to a new file 
const second = result;
console.log(result);

});

// This is the mixed result of the first and second text file asynchronously 

writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('done with the task');
});

console.log('starting next task');