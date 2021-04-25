import axiosInstance from "./axios-client";

export const AxiosPut = async (
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

        const response = await axiosInstance.put(url, data, config);

        if (response.data) {
            return Promise.resolve({ data: response.data, error: null });
        }
        return Promise.resolve({ data: response, error: null });
    } catch (error) {
        return Promise.reject({ ...error, data: null });
    }
};
