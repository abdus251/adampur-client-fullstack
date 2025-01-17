import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'http://sudo delete web service mongo-car-doctor-server'
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;