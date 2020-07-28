import {getUsersProfile} from "../../Components/api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";


const SET_USER_PROFILE = 'SRT-USER-PROFILE'
const SET_USER_STATUS = 'SRT-USER-STATUS'
const SET_USER_PHOTO = 'localhost/my-site/SET_USER_PHOTO'

let propfile = {
    aboutMe: null as string | null,
    contacts: {
        facebook: null as string | null,
        github: null as string | null,
        instagram: null as string | null,
        mainLink: null as string | null,
        twitter: null as string | null,
        vk:null as string | null,
        website: null as string | null,
        youtube: null as string | null,
    },
    fullName: null as string | null,
    lookingForAJob: null as boolean | null,
    lookingForAJobDescription: null as string | null,
    photos: {
        small: null as string | null,
        large:  null as string | null,
    },
    userId: null as number | null,
}
export type contactsType = {
    facebook: string | null,
    github: string | null,
    instagram: string | null,
    mainLink: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
    youtube: string | null,
}

export type profileType = typeof propfile
// export type  profileType = {
//     aboutMe: string | null,
//     contacts: {
//         facebook: string | null,
//         github: string | null,
//         instagram: string | null,
//         mainLink: string | null,
//         twitter: string | null,
//         vk: string | null,
//         website: string | null,
//         youtube: string | null,
//         },
//     fullName: string | null,
//     lookingForAJob: boolean | null,
//     lookingForAJobDescription: string | null,
//     photos: PhotosType,
//     userId: number | null
// }

export type profilePayloadtype = {
    profile: profileType | null,
    status: string | null
    photos: PhotosType | null
}

type PhotosType = {
    small: string | null
    large: string | null
}


let initialState = {
    profile: null as profileType | null,
    status: "Default status",
    photos: null as PhotosType | null

}
const profileReducers = (state = initialState, action: any): profilePayloadtype => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case SET_USER_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos} as profileType}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

type actionsProfileTypes = setProfileActionType  | setStatusType | setPhotosType

type thunkType = ThunkAction<void, AppStateType, unknown, actionsProfileTypes>

export type setProfileActionTypePayload = {
    data:  profileType
}
export type setProfileActionType = {
    type: typeof SET_USER_PROFILE
    payload: setProfileActionTypePayload
}

export let setProfile = (data: setProfileActionTypePayload): setProfileActionType => ({
    type: SET_USER_PROFILE,
    payload: data
})

type setStatusType = {
    type: typeof SET_USER_STATUS
    status: string
}

export let setStatus = (status: string):setStatusType => ({type: SET_USER_STATUS, status} as const)
type setPhotosType={
    type: typeof SET_USER_PHOTO
    photos: PhotosType
}

export let setPhotos = (photos: PhotosType):setPhotosType => ({type: SET_USER_PHOTO, photos})


export let thunkGetStatus = (userId: number):thunkType => async (dispatch) => {
    let data = await getUsersProfile.getStatus(userId)
    dispatch(setStatus(data))
}
export let thunkPutStatus = (dataStatus: string):thunkType => async (dispatch) => {
    let data = await getUsersProfile.putStatus(dataStatus)
    if (data.resultCode === 0) {
        dispatch(setStatus(dataStatus))
    }
}
export let thunkSetProfile = (userId: number):thunkType => async (dispatch) => {
    let data = await getUsersProfile.userProfile(userId)
    dispatch(setProfile(data))
}
export let handleFile = (file: File):thunkType => async (dispatch) => {
    let data = await getUsersProfile.putPhotos(file)
    if (data.resultCode === 0) {
        dispatch(setPhotos(data.data.photos))
    }
}

export let thunkChangProfile = (data: setProfileActionTypePayload):thunkType => async (dispatch) => {
    let response = await getUsersProfile.ChangProfile(data)
    if (response.resultCode === 0)
        dispatch(setProfile(data))

}
export default profileReducers