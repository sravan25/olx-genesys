import axios from 'axios';
import store from '../store';
//import {systemIptoken} from '../actions/login';
//import {getCookie} from '../utils/utils';
const state = store.getState()

const axiosInstance = axios.create({
    baseURL:'http://192.168.1.230:8018/icws/'
});


//console.log("cookie == ",getCookie("token"));
//axiosInstance.defaults.headers["Authorization"] = 'Bearer '+getCookie("token");
//axiosInstance.defaults.headers['Accept'] = 'application/json'
//xiosInstance.defaults.headers['Content-Type'] = 'application/json'
axiosInstance.interceptors.request.use(request => {

  //  request.headers["Authorization"] = 'Bearer '+getCookie("token");
    request.headers['Accept-Language'] = 'en-US';
    request.headers['Content-Type'] = 'application/json'

    return request;
},error => {
    console.log(error);
    return error;
});

axiosInstance.interceptors.response.use(response => {
    return response;
},error => {
    return error;
})
export default axiosInstance;
