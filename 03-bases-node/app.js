const { createFile } = require('./helpers/multiplication');
const { argv } = require('./config/yargs');

console.clear();

createFile(argv.base, argv.list).then(fileName => console.log(fileName)).catch(err => console.log(err));