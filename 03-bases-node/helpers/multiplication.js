const fs = require('fs');

const createFile = (base) => {
    return new Promise((resolve, reject) => {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            i == 10 ? salida += `${base} x ${i} = ${base * i}` : salida += `${base} x ${i} = ${base * i}\n`;
        }

        try {
            const fileName = `tabla-${base}.txt`;
            fs.writeFileSync(fileName, salida);
            resolve(fileName);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    createFile
}