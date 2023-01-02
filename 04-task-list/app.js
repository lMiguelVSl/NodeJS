import { inquirerMenu } from './helpers/inquirer.js';
import { pause } from './helpers/messages.js';
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