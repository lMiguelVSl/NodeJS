import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import { Searchs } from "./models/searchs.js";
import "dotenv/config.js";

(async () => {
    let opt = '';
    let searchs = new Searchs;
    while (opt !== 0) {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                let text = await readInput('City to search: ');
                await searchs.searchCity(text);
                console.log('\n City Information: \n'.green);
                console.log('City:',);
                console.log('Lat:',);
                console.log('Lng:',);
                console.log('Temp:',);
                console.log('Temp Min:',);
                console.log('Temp Max',);
                break;
            case 2:
                break;
        }

        if (opt !== 0) await pause();
    }
})();