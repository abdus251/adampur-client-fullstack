import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

// Create an Axios instance with a base URL
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Request interceptor to add the authorization header
  axiosSecure.interceptors.request.use(function
    (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // interceptor to handle 401/403
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    });
    
  return axiosSecure;
};


export default useAxiosSecure;
