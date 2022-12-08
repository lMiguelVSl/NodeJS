const { createFile } = require('./helpers/multiplication');

console.clear();

const [,,arg3 = 'base=5' ] = process.argv;
const [, base ] = arg3.split('=');

createFile(base).then(fileName => console.log(fileName)).catch(err => console.log(err));