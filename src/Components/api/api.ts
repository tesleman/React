import axios from "axios";
import {profileType, setProfileActionTypePayload} from "../../redux/Redusers/profile-reducers";
import {photosType, usersType} from "../../redux/Redusers/users-reducers";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "393404f6-a7c7-4502-8bb9-dd6390bbf708"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
type getUsersType = {
    items: Array<usersType>
    totalCount: number
    error: string
}
export let usersApi = {
    getUsers(page: number, size: number) {
        return instance.get<getUsersType>(`users?page=${page}&count=${size}`)
            .then(response => {
                return response.data
            })
    },

}
export let usersFollowing = {
    unFollow(uId: number) {
        return instance.delete<APIResponseType>(`follow/${uId}`)
            .then(response => {
                return response.data
            })
    },
    follow(uId: number) {
        return instance.post<APIResponseType>(`follow/${uId}`)
            .then(response => {
                return response.data
            })
    }
}
type SavePhotoResponseDataType = {
    photos: photosType
}
export let getUsersProfile = {
    userProfile(userId: number) {
        return instance.get<APIResponseType<profileType>>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number) {

        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    putStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status/`, {status: status})
            .then(response => {
                return response.data
            })
    },
    putPhotos(file: File) {
        let formData = new FormData();
        formData.append("image", file);
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`/profile/photo/`, formData)
            .then(response => {
                return response.data
            })
    },
    ChangProfile(formData: setProfileActionTypePayload) {
        return instance.put<APIResponseType>(`/profile`, {...formData, userId: 8614})
            .then(response => {
                return response.data
            })

    },

}

type authMeType = {
    email: string
    login: string
    id: number
}
type loginType = {
    id: number
}
export let getAuth = {
    auth() {
        return instance.get<APIResponseType<authMeType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(formData: setProfileActionTypePayload) {

        return instance.post<APIResponseType<loginType>>(`auth/login/`, {...formData, rememberMe: true, captcha: true})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete<APIResponseType>(`auth/login/`)
            .then(response => {
                return response.data
            })

    }
}


