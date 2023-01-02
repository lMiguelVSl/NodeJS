import { inquirerMenu, pause } from './helpers/inquirer.js';

console.clear();

(async () => {
    console.log('Hello');

    let opt = '';

    while (opt !== '0') {
        opt = await inquirerMenu();
        console.log({ opt });

        if (opt !== '0') await pause();
    }
})();