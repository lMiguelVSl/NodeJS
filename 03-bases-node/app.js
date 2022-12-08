const { createFile } = require('./helpers/multiplication');
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log('argv: ',argv);
console.log('argv BASE: ',argv.base);

//createFile(base).then(fileName => console.log(fileName)).catch(err => console.log(err));