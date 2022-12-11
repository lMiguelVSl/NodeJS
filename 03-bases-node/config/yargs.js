const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Number to get the multiplication table'
    })
    .options('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Show or not the result in console'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'The base have to be number type';
        return true;
    })
    .argv;

module.exports = {
    argv
}