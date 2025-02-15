import axios from "axios"

const axiosPublic = axios.create({
    baseURL:'https://adampur-server-fullstack-3.onrender.com'
})


const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;