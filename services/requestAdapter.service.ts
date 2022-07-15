import axios, { Axios, AxiosRequestConfig } from "axios";

export default class RequestAdapterService {
    axios: Axios;

    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_COVID_19_API_URL,
        });
    }

    sendPostRequest(url: string, data: any, config: AxiosRequestConfig) {
        return this.axios.post(url, data, config);
    }

    sendPutRequest(url: string, data: any, config: AxiosRequestConfig) {
        return this.axios.put(url, data, config);
    }

    sendGetRequest(url: string, config?: AxiosRequestConfig) {
        return this.axios.get(url, {
            ...config,
        });
    }
}
