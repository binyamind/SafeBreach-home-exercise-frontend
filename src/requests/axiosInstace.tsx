import axios from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/yellow-pages/", // extract to .env file
});

export const request = ({ ...options }) => {
  return axiosInstance(options);
};

const AxiosInterceptor = ({ children }: { children: any }) => {
  // useEffect(() => {

  // }, [showErrorBoundaryModal]);

  return children;
};

export default request;
export { AxiosInterceptor };
