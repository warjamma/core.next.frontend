import axiosInstance from "./axios-client";

export const AxiosDelete = async (
    url: string,
    params = {},
    customParameter = { showPopup: true },
) => {
    try {
        const config = {
            params,
            customParameter,
        };

        const response = await axiosInstance.delete(url, config);
        if (!response.data.error) return { data: response.data, error: null };
        else {
            return { data: response, error: null };
        }
    } catch (error) {
        return { ...error, data: null };
    }
};
