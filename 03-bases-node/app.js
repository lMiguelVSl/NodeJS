const { createFile } = require('./helpers/multiplication');
const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv)) throw 'The base have to be number type';
        return true;
    }).argv;

console.clear();

console.log('argv: ', argv);

//createFile(base).then(fileName => console.log(fileName)).catch(err => console.log(err));