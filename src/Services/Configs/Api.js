import axios from 'axios';

//Base URL API
const BASE_URL = 'https://reqres.in';

//Endpoint
export const USERS = 'api/users';

export default API = axios.create({
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    baseURL: BASE_URL,
    timeout: 1000,
});
