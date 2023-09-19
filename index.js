const fs = require('fs');
const readline = require('readline');
const main = require('./bingo.js');
const mainFile = process.argv[2];

function processFile(file) {
    const readInterface = readline.createInterface({
        input: fs.createReadStream(file),
        console: false,
    });

    let input = '';
    readInterface.on('line', (line) => {
        input += line + '\n';
    });

    readInterface.on('close', () => {
        const result = main(input);
        console.log('Is it a bingo?', result);
    });
}

if (mainFile) {
    processFile(mainFile);
} else {
    console.log('Please provide a file as an argument.');
}

