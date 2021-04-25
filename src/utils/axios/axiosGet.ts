import axiosInstance from "./axios-client";

export const AxiosGet = async (
    url: string,
    params = {},
    customParameter = { showPopup: true },
) => {
    try {
        const config = {
            params,
            customParameter,
        };

        const response = await axiosInstance.get(url, config);
        if (!response.data.error) return { data: response.data, error: null };
        else {
            return { data: response, error: null };
        }
    } catch (error) {
        return { ...error, data: null };
    }
};
