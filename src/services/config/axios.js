import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://backend.mfuentesmfe.com',
});

export default clientAxios;