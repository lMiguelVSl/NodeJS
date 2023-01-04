import fs from 'fs';

const saveDB = (data) => {
    const filePath = './db/data.json';
    fs.writeFileSync(filePath, JSON.stringify(data));
}

export { saveDB };