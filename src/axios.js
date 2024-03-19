import axios from 'axios'

const axiosClient = axios.create({
    //baseURL: "/api",
    baseURL: "https://aims.bulsu-ovprei.com/api",
    headers:{
        "Content-Type":"application/json",
        'Authorization': 'Bearer ${store.state.user.token}',
        //'X-Requested-With': 'XMLHttpRequest',
    }
  
});

axiosClient.defaults.withCredentials = false;

export default axiosClient;
