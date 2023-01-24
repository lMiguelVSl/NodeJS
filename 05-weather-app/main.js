import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";

(async () => {
    let opt = '';
    while (opt !== 0) {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                break;
            case 2:
                break;
        }

        if (opt !== 0) await pause();
    }
})();