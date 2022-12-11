const fs = require('fs');

const createFile = (base, limit, list = false) => {
    return new Promise((resolve, reject) => {

        let salida = '';

        for (let i = 1; i <= limit; i++) {
            i == limit ? salida += `${base} x ${i} = ${base * i}` : salida += `${base} x ${i} = ${base * i}\n`;
        }

        try {
            const fileName = `tabla-${base}.txt`;
            fs.writeFileSync(fileName, salida);
            resolve(fileName);
        } catch (error) {
            reject(error);
        }

        if (list) {
            console.log('=======================');
            console.log(`Number's ${base} table:`);
            console.log('=======================');
            console.log(salida);
        }        
    });
}

module.exports = {
    createFile
}