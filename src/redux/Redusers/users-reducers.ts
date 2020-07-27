import {usersApi, usersFollowing} from "../../Components/api/api";
import {AppStateType} from "../redux-store";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_PAGES = 'SET-PAGES'
const IS_LOADING = 'LOADING'
const IS_LOADING_BUTTON = 'LOADING-BUTTON'

export type photosType = {
    small: string | null
    large: string | null
}

export type usersType = {
    uniqueUrlName: null
    name: string
    id: number
    photos: photosType
    status: string | null
    followed: boolean
}


let initialState = {
    users: [] as Array<usersType>,
    pageSize: 35,
    currentPage: 140,
    total: 1,
    isLoading: true,
    loadingButton: [] as Array<number>,
    loadingButtonStatus: false
}
type initialStateType = typeof initialState
const userReducers = (state = initialState, action: actionsTyped): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:

            return {...state, currentPage: action.currentPage}
        case SET_PAGES:
            return {...state, total: action.pages}

        case IS_LOADING:
            return {...state, isLoading: action.loadingStatus}

        case IS_LOADING_BUTTON:

            return {
                ...state,
                loadingButton: action.loadingButtonStatus
                    ? [...state.loadingButton, action.userId]
                    : state.loadingButton.filter(id => id !== action.userId)
            }


        default:
            return state
    }
}

type actionsTyped =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setCountType
    | setLoadingType
    | setButtonLoadingType


type followType = {
    type: typeof FOLLOW
    userId: number
}
export let follow = (userId: number): followType => ({type: FOLLOW, userId} as const)
type unfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export let unfollow = (userId: number): unfollowType => ({type: UNFOLLOW, userId} as const)

type setUsersType = {
    type: typeof SET_USERS
    users: Array<usersType>
}

export let setUsers = (users: Array<usersType>) => ({type: SET_USERS, users} as const)

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export let setCurrentPage = (currentPage: number): setCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)

type setCountType = {
    type: typeof SET_PAGES
    pages: number
}
export let setCount = (pages: number): setCountType => ({type: SET_PAGES, pages} as const)

type setLoadingType = {
    type: typeof IS_LOADING
    loadingStatus: boolean
}
export let setLoading = (loadingStatus: boolean): setLoadingType => ({type: IS_LOADING, loadingStatus} as const)

type setButtonLoadingType = {
    type: typeof IS_LOADING_BUTTON
    loadingButtonStatus: boolean
    userId: number
}
export let setButtonLoading = (loadingButtonStatus: boolean, userId: number) => ({
    type: IS_LOADING_BUTTON,
    loadingButtonStatus,
    userId
} as const)


type thunkType = ThunkAction<void, AppStateType, unknown, actionsTyped>


export let thunkSetUsers = (currentPage: number, pageSize: number): thunkType => async (dispatch, getState) => {
    dispatch(setLoading(true))
    let data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))

    dispatch(setCount(data.totalCount))
    dispatch(setLoading(false))
}
export let thunkCurrentPage = (number: number, pageSize: number): thunkType => async (dispatch) => {
    dispatch(setLoading(true))
    let data = await usersApi.getUsers(number, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setCurrentPage(number))
    dispatch(setLoading(false))
}
export let thunkUnFollow = (userId: number): thunkType => async (dispatch) => {
    dispatch(setButtonLoading(true, userId))
    let data = await usersFollowing.unFollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(setButtonLoading(false, userId))

}
export let thunkFollow = (userId: number): thunkType => async (dispatch) => {
    dispatch(setButtonLoading(true, userId))
    let data = await usersFollowing.follow(userId)
    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(setButtonLoading(false, userId))
}

export default userReducers