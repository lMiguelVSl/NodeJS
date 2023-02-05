import { inquirerMenu, pause, placesList, readInput } from "./helpers/inquirer.js";
import { Searchs } from "./models/searchs.js";
import "dotenv/config.js";

(async () => {
    let opt = '';
    let searchs = new Searchs;
    while (opt !== 0) {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //show message
                let userInput = await readInput('City to search: ');
                //search places
                let places = await searchs.searchCity(userInput);
                let id = await placesList(places);
                //selected place
                const { name, lat, lng } = places.find(m => m.id === id);
                //weather

                //show results
                console.log('\n City Information: \n'.green);
                console.log('City:', name);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
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