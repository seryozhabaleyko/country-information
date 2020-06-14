import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export default Api;