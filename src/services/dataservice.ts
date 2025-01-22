import Axios from "axios";

const instance = Axios.create({
    baseURL: import.meta.env.VITE_API_URL, //backend url-je
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance