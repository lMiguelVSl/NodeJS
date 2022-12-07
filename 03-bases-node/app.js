const fs = require('fs');

console.clear();
console.log('===============');
console.log('Number 5 table');
console.log('===============');

const base = 5;
let salida = '';

for (let i = 1; i <= 10; i++) {
    i == 10 ? salida += `${base} x ${i} = ${base * i}` : salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log('FILE CREATED');
});

console.log(salida);