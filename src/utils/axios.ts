import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig | any => {
        // 요청을 보내기 전에 실행할 코드
        return config;
    },
    (error: any) => {
        // 요청 에러 처리
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 응답을 처리하기 전에 실행할 코드
        return response;
    },
    (error: any) => {
        // 응답 에러 처리
        return Promise.reject(error);
    }
);

export default instance;
