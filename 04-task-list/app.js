import { inquirerMenu, pause } from './helpers/inquirer.js';
import { Task } from './models/task.js';

console.clear();

(async () => {
    console.log('Hello');

    let opt = '';

    while (opt !== '0') {
        opt = await inquirerMenu();
        console.log({ opt });

        const tarea = new Task('Comer');
        console.log(tarea);
        if (opt !== '0') await pause();
    }
})();