const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'The base have to be number type';
        return true;
    })
    .options('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default: false
    }).argv;

    module.exports = {
        argv
    }