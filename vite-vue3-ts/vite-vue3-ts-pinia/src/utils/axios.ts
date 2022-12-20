import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
const request = axios.create();

// request interceptors
request.interceptors.request.use((config: AxiosRequestConfig) =>
{
    // do something 
    return config;
},(error:any) => {
Promise.reject(error);
}
)

// response interceptors

request.interceptors.response.use((config:AxiosResponse) =>
{
    // do something 
    return config;
},(error:any) => {
    Promise.reject(error);
})

export default request;