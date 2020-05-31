export const SET_AUTH_USER = 'SET_AUTH_USER'

export function setAuthedUser(authUser) {
    return {
        type: SET_AUTH_USER,
        authUser
    }
}