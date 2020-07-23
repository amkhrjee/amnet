const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state,
                authError: 'LOGIN FAILED'
            }
        default:
            return state
    }
}

export default authReducer