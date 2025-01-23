import type User from "@/types/User";
import Axios from "./dataservice";
import type LoginForm from "@/types/LoginForm";

export default {
    registerUser(data: User){
        return Axios.post('/register', data)
                .then((res)=>{
                    return res
                })
                .catch((err)=>{
                    return Promise.reject(err.response) // return Promise.reject() => a másik oldalon a catch ágba fut
                }) //hiba történt
    },
    login(data: LoginForm){
        return Axios.post('/login', data)
                .then((res)=>{
                    return res
                })
                .catch((err)=>{
                    return Promise.reject(err.response) // return Promise.reject() => a másik oldalon a catch ágba fut
                }) //hiba történt
    },
    logout(token: string){
        return Axios.post('/logout', '', {
            headers: {
                Authorization: 'Bearer ' + token //olyan route-k elérése, amik védve vannak = kell hozzá jogusultság (pl. kijelentkezéshez már be kell jelentkeznünk először)
            }
        })
                .then((res)=>{
                    return res.data
                })
                .catch(()=>{
                    return Promise.reject()
                })
    }
}