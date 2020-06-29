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
    }
}

export let getAuth = {
    auth() {

        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}


