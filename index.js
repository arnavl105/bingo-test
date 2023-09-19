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
        const results = main(input);
	if (results.length === 1) {
	    console.log(results[0] ? 'Bingo' : 'No Bingo');
	    return;
	} 
        else {
	  results.forEach((result, i) => {
	      console.log(`Board #${i + 1}: ${result ? 'Bingo' : 'No Bingo'}`);
	  });
	}	
    });
}

if (mainFile) {
    processFile(mainFile);
} else {
    console.log('Please provide a file as an argument.');
}

