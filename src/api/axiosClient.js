import axios from 'axios';

const axiosClient = axios.create({
    baseURL = process.env.REACT_APP_API_URL,//url root backend
    headers: {
        "content-type": 'application/json'
    },
})
axiosClient.interceptors.request.use(async (config) => {
    //xử lý token 
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error
});

export default axiosClient;