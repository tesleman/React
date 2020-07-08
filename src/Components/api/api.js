import * as axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "393404f6-a7c7-4502-8bb9-dd6390bbf708"
    }
})


export let usersApi = {
    getUsers(page, size) {
        return instance.get(`users?page=${page}&count=${size}`)
            .then(response => {
                return response.data
            })
    },

}

export let usersFollowing = {
    unFollow(uId) {
        return instance.delete(`follow/${uId}`)
            .then(response => {
                return response.data
            })
    },
    follow(uId) {
        return instance.post(`follow/${uId}`)
            .then(response => {
                return response.data
            })
    }
}

export let getUsersProfile = {
    userProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId){

        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    putStatus(status){
        return instance.put(`profile/status/`, {status: status})
            .then(response => {
                return response.data
            })
    }
}

export let getAuth = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response
            })
    },
    login(formData) {

        return instance.post(`auth/login/`, {...formData, rememberMe: true, captcha: true})
            .then(response => {

                return response.data

            })

    },
    logout() {

        return instance.delete(`auth/login/`)
            .then(response => {
                console.log(response)
                return response.data

            })

    }
}


