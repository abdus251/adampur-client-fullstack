import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'http://https://adampur-server-fullstack-4.onrender.com'
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;