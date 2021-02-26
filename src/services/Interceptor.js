import axios from 'axios';
import store from '../store';
//import {systemIptoken} from '../actions/login';
import {getCookie} from '../utils/utils';
const state = store.getState()

const axiosInstance = axios.create({
    baseURL:'http://192.168.1.230:8018/icws/'
});

if(state.login.system.token !== "") {
 //   axiosInstance.defaults.headers['Authorization'] = 'Bearer '+state.login.system.token;
}
console.log("cookie == ",getCookie("token"));
//axiosInstance.defaults.headers["Authorization"] = 'Bearer '+getCookie("token");
//axiosInstance.defaults.headers['Accept'] = 'application/json'
//xiosInstance.defaults.headers['Content-Type'] = 'application/json'
axiosInstance.interceptors.request.use(request => {
    if(state.login.system.token !== "") {
        console.log("Request Authentication = ",state.login.system.token)
        request.headers["Authorization"] = 'Bearer '+state.login.system.token;
        request.headers['Accept'] = 'application/json';
        request.headers['Content-Type'] = 'application/json'
    } else{
        request.headers["Authorization"] = 'Bearer '+getCookie("token");
        request.headers['Accept'] = 'application/json';
        request.headers['Content-Type'] = 'application/json'
    }
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