import fs from 'fs';

const filePath = './db/data.json';

const saveDB = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

const readDB = () => {
    if (!fs.existsSync(filePath)) {
        return null;
    }

    const info = fs.readFileSync(filePath, { encoding: 'utf8' });
    const data = JSON.parse(info);
    return data;
}

export {
    saveDB,
    readDB
};