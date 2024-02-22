import { axiosInstance } from "./axiosInstance";

//GetAll, getById, create, update, delete
export const baseService = {
    getAll: async (url) => {

        try {
            const response = await axiosInstance.get(url);
            return response.data;
        } catch (error) {
            console.log("getAll error", error);
            throw error;
        }
    },
    delete: async (url, id) => {
        const response = await axiosInstance.delete(`${url}/${id}`);
        return response.data;
    },
    getById: async (url, id) => {
        const response = await axiosInstance.get(`${url}/${id}`);
        return response.data;
    },
    create: async (url, data) => {
        const response = await axiosInstance.post(url, data);
        return response.data;
    }
}