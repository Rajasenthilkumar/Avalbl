import AxiosInstance from './Interceptor';

export const apiUrl = process.env.REACT_APP_API_URL;

// export const imageURL = process.env.REACT_APP_IMAGE_DIR;

const Env = {
  async get(path: string, header: any) {
    const api = await AxiosInstance.get(`${apiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },

  async post(path: string, payload: any, header: any) {
    const api = await AxiosInstance.post(`${apiUrl}${path}`, payload, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },

  async put(path: string, payload: any, header: any) {
    const api = await AxiosInstance.put(`${apiUrl}${path}`, payload, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },

  async delete(path: string, header: any) {
    const api = await AxiosInstance.delete(`${apiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    });
    return api;
  },
};

export default Env;
