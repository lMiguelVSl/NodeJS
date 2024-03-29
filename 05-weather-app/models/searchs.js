import axios from 'axios';
import fs from 'fs';

export class Searchs {
    history = [];
    dbPath = './Db/db.json';
    constructor() {
        //TODO: read DB if exists
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'languaje': 'es'
        }
    }

    get historyCap() {
        return this.history.map(item => {
            let words = item.split(' ');
            words = words.map(p => p[0].toUpperCase() + p.substring(1))
            return words.join(' ');
        });
    }

    async searchCity(place = '') {

        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
            params: this.paramsMapBox
        });

        const res = await instance.get();
        return res.data.features.map(p => ({
            id: p.id,
            name: p.place_name,
            lng: p.center[0],
            lat: p.center[1]
        }));

    }

    async searchWeather(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'lat': lat,
                    'lon': lon,
                    'appid': process.env.OPENWEATHER_KEY
                }
            });

            const res = await instance.get();
            const { temp, temp_min, temp_max } = res.data.main
            return {
                temp,
                temp_min,
                temp_max
            };
        } catch (error) {
            console.log('GET WEATHER ERROR');
        }
    }

    saveHistory(place = '') {
        if (this.history.includes(place.toLocaleLowerCase())) return;
        this.history.unshift(place.toLocaleLowerCase());
        if (this.history.length > 5) this.history.pop();
        this.saveDB();
    }

    saveDB() {
        const payload = {
            history: this.history
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    readDb() {
        const dbData = JSON.parse(fs.readFileSync(this.dbPath, { encoding: 'utf-8' }));
        this.history = dbData.history;
    }
}
