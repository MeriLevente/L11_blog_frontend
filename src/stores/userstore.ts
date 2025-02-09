import userservice from "@/services/userservice";
import type LoggedInUser from "@/types/LoggedInUser";
import type LoginForm from "@/types/LoginForm";
import {defineStore} from "pinia";

export const useUserStore = defineStore('userStore', {
    //state => globális változók, getter => ha egy változótt módosítva kérünk (pl egy számváltozó duplája), action => függvények, ami az itteni változókkal dolgoznak (pl kommunikálás a backenddel)
    state: () => ({
        status : {
            loggedIn: false,
            message: ''
        },
        user: <LoggedInUser>{

        }
    }),
    getters: {},
    actions: {
        login(data: LoginForm) {
            return userservice.login(data)
                .then((res) => {
                    this.status.loggedIn = true
                    this.status.message = ""
                    this.user = res.data.data
                    sessionStorage.setItem("user", JSON.stringify(this.user)) //csak stringet lehet tárolni
                })
                .catch((err)=>{
                    this.status.loggedIn = false
                    this.status.message = err.data.data.error
                    this.user = {name: "", token: "", id: null, role: 0}
                    return Promise.reject()
                })
        },
        logout(){
            return userservice.logout(this.user.token)
                .then(()=>{
                    this.status.loggedIn = false
                    this.user = {name: "", token: "", id: null, role: 0}
                    sessionStorage.removeItem("user")
                })
                .catch(()=>{
                    this.status.loggedIn = false
                    this.user = {name: "", token: "", id: null, role: 0}
                })
        }
    } 
})