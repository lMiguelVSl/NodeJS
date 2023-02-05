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
                if (id === '0') continue;
                //selected place
                const { name, lat, lng } = places.find(m => m.id === id);
                //save history
                searchs.saveHistory(name);
                //weather
                let { temp, temp_min, temp_max } = await searchs.searchWeather(lat, lng);
                //show results
                console.log('\n City Information: \n'.green);
                console.log('City:', name);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Temp:', temp);
                console.log('Temp Min:', temp_min);
                console.log('Temp Max', temp_max);
                break;
            case 2:
                searchs.readDb();
                searchs.history.forEach((city, i) => {
                    const idx = i + 1;
                    console.log(`${idx}`.green, city);
                })
                break;
        }

        if (opt !== 0) await pause();
    }
})();