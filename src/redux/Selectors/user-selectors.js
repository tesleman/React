
export let usersPage = (state) => {
    return state.usersPage.users
}

export let pageSize = (state) => {
    return state.usersPage.pageSize
}

export let currentPage = (state) => {
    return state.usersPage.currentPage
}

export let total = (state) => {
    return state.usersPage.total
}

export let isLoading = (state) => {
    return state.usersPage.isLoading
}

export let loadingButton = (state) => {
    return state.usersPage.loadingButton
}
export let getId = (state) => {
    return state.auth.id
}
