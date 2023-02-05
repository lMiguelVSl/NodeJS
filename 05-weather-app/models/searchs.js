import axios from 'axios';

export class Searchs {
    history = ['', '', ''];
    constructor() {
        //TODO: read DB if exists
    }

    async searchCity(place = '') {

        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
            params: {
                'access_token': process.env.MAPBOX_KEY,
                'limit': 5,
                'languaje': 'es'
            }
        });

        await instance.get()
            .then(res => {
                console.log('DATA', res.data);
                return;
            })
            .catch(err => console.log('error axios get'));

    }
}
