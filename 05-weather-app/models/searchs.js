import axios from 'axios';

export class Searchs {
    history = ['', '', ''];
    constructor() {
        //TODO: read DB if exists
    }

    async searchCity(place = '') {
        try {
            const res = await axios.get('https:reqres.in/api/users?page=2');
            console.log(res.data);
            return [];

        } catch (error) {
            return [];
        }
    }
}
