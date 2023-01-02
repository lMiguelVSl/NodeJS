import {inquirerMenu} from './helpers/inquirer.js';
console.clear();

const main = async () => {
    console.log('Hello');

    let opt = '';

    while (opt !== '0') {
        opt = await inquirerMenu();
        console.log({ opt });
    }
}

main();