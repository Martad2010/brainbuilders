import axios from "axios";

export const TOKEN = "BRAIN_BUILDER_WEB";

export const SetAuthToken = (token?: string | null) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const useURL: string = process.env.NEXT_PUBLIC_BASE_URL as string;

export const SetDefaultHeaders = () => {
  axios.defaults.baseURL = useURL;
};
