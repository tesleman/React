
export let userId = (state) => {
    return  state.auth.id
}
export let profile = (state) => {
    return  state.userProfile.profile
}
export let status = (state) => {
    return state.userProfile.status
}