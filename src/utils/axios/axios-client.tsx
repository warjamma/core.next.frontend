import axios from "axios";
import queryString from "query-string";
import React, { Dispatch, SetStateAction } from "react";
import { getCookie } from "../helper";
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "content-type": "application/json",
    },
    timeout: parseInt(process.env.REACT_APP_API_TIMEOUT as string, 10),
    paramsSerializer: (params) => queryString.stringify(params),
});

const interceptors = axiosClient.interceptors;

interceptors.request.use(async (config) => {
    const token = getCookie("accessToken");
    // console.log('[PROCESS] TOKEN', token);

    if (token) {
        // has been token in cookies, don't need get guest token
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        //get guest token and save to cookies
        // const res = await axios.get(
        //   process.env.REACT_APP_BASE_URL + apiLinks.fetchGuestToken,
        // );
        // console.log('GET NEW TOKEN FOR GUEST', res);
        // if (res?.data?.data) {
        //   setCookie('accessToken', res?.data?.data, 7, '/');
        //   config.headers.Authorization = `Bearer ${res?.data?.data}`;
        // }
    }

    return config;
});

interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        // console.log('axiosClient.interceptors.response.use error', error?.response);

        if (error?.response) {
            // !!!ERROR FROM SERVER
            console.log("!!!ERROR FROM SERVER", error?.response);

            return Promise.reject(error?.response?.data);
        }
        // Handle errors other
        else throw error;
    },
);
export const interceptorsAxiosListener = async (
    dispatch: Dispatch<SetStateAction<any>>,
) => {};
export default axiosClient;
