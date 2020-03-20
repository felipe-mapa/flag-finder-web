import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://felipepavanela78601.ipage.com/test/wp-json/wp/v2/'
});

export default instance;