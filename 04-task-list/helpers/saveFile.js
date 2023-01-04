import fs from 'fs';

const saveDB = (data) => {
    const filePath = './db/data.txt';
    fs.writeFileSync(filePath, JSON.stringify(data));
}

export { saveDB };