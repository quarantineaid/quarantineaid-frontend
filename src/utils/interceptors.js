import axios from 'axios';
import store from '../store'

export default function setup() {
    axios.interceptors.request.use((config) =>{
        const userObj = store.state.account.user;
        const token = userObj?userObj.info.token:null;
        debugger;
        if(token) {
            config.headers["access-token"] = `${token}`;
        }
        return config;
    }, (err)=> {
        return Promise.reject(err);
    });
}