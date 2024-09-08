import axios from 'axios';

// Configure the Axios instance with the base URL
const api = axios.create({
    baseURL: '/api', // Adjust this based on your backend base URL
    timeout: 10000, // Optional: timeout for requests
});

// Generic GET request function
export const get = async (url: string) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error in GET request:', error);
        throw error;
    }
};

// Generic POST request function
export const post = async (url: string, data: any) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
};

// Generic PUT request function
export const put = async (url: string, data: any) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        console.error('Error in PUT request:', error);
        throw error;
    }
};

// Generic DELETE request function
export const remove = async (url: string) => {
    try {
        const response = await api.delete(url);
        return response.data;
    } catch (error) {
        console.error('Error in DELETE request:', error);
        throw error;
    }
};
