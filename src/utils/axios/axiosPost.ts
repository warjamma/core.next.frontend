/* eslint-disable prefer-promise-reject-errors */
import axiosInstance from "./axios-client";
export const AxiosPost = async (
    url,
    data,
    params = {},
    customParameter = { showPopup: true },
) => {
    try {
        const config = {
            params,
            customParameter,
        };

        const response = await axiosInstance.post(url, data, config);
        if (response.data) {
            return Promise.resolve({ data: response.data, error: null });
        }
        return Promise.resolve({ data: response, error: null });
    } catch (error) {
        return Promise.reject({ ...error, data: null });
    }
};
