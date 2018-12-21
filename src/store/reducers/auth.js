const initState = {
    authError: null
}

const auth = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: "Erro ao logar"
            };
        case 'LOGIN_SUCCESS':
            console.log('Logado');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Sign out');
            return state;
        default:
            return state;
    }
}

export default auth;