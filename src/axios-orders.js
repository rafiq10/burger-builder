import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e9de5.firebaseio.com/'
});

export default instance;