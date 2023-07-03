import axios from  "axios";

export const axiosInstance = axios.create({
    baseURL : "https://mystic-wheat.vercel.app/api/"
})