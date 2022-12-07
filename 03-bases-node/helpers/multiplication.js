const fs = require('fs');

const createFile = (base) => {
    console.log('===============');
    console.log(`Number ${base} table`);
    console.log('===============');

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        i == 10 ? salida += `${base} x ${i} = ${base * i}` : salida += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log('FILE CREATED');
    });

    console.log(salida);
}

module.exports = {
    createFile
}