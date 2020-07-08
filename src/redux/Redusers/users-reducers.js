import {usersApi, usersFollowing} from "../../Components/api/api";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_PAGES = 'SET-PAGES'
const IS_LOADING = 'LOADING'
const IS_LOADING_BUTTON = 'LOADING-BUTTON'

let initialState = {
    users: [],
    pageSize: 35,
    currentPage: 138,
    total: 1,
    isLoading: true,
    loadingButton: []
}
const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
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
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }

        case SET_USERS:
            return {...state, users: action.users}
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
                    : [state.loadingButton.filter(id => id !== action.userId)]

            }
        default:
            return state
    }
}
export let follow = (userId) => ({type: FOLLOW, userId})
export let unfollow = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setCount = (pages) => ({type: SET_PAGES, pages})
export let setLoading = (loadingStatus) => ({type: IS_LOADING, loadingStatus})
export let setButtonLoading = (loadingButtonStatus, userId) => ({type: IS_LOADING_BUTTON, loadingButtonStatus, userId})
export let thunkSetUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setLoading(true))
    usersApi.getUsers(currentPage, pageSize)

        .then(data => {

            dispatch(setUsers(data.items))
            dispatch(setCount(data.totalCount))
            dispatch(setLoading(false))
        })
}
export let thunkCurrentPage = (number, pageSize) => (dispatch) => {
    dispatch(setLoading(true))
    usersApi.getUsers(number, pageSize)

        .then(data => {

            dispatch(setUsers(data.items))
            dispatch(setCurrentPage(number))
            dispatch(setLoading(false))
        })
}
export let thunkUnFollow = (userId) => (dispatch) => {
    dispatch(setButtonLoading(true, userId))
    usersFollowing.unFollow(userId)
        .then(data => {

            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(setButtonLoading(false, userId))
        })

}
export let thunkFollow = (userId) => (dispatch) => {
    dispatch(setButtonLoading(true, userId))
    usersFollowing.follow(userId)
        .then(data => {

            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(setButtonLoading(false, userId))
        })

}

export default userReducers