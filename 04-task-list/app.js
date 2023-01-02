import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';

console.clear();

(async () => {

    let opt = '';
    const tasks = new Tasks();

    while (opt !== '0') {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Task Desciption: ');
                tasks.createTask(description);
                break;
            case '2':
                console.log(tasks._list)
                break;
        }

        if (opt !== '0') await pause();
    }
})();