const { createFile } = require('./helpers/multiplication');

console.clear();

createFile(9).then(fileName => console.log(fileName)).catch(err => console.log(err));