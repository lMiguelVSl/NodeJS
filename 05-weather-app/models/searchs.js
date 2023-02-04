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
                'access_token': 'pk.eyJ1IjoibWlndWVsdnNsIiwiYSI6ImNsZGY4dmRqcDBnZmIzcW1wenNweHo3bGsifQ.Byy9BY57lcBcmdQ48kUN_w',
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
