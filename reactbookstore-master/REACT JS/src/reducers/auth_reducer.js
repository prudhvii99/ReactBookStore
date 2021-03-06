export default function(state={}, action){
    switch(action.type){
        case 'AUTH_USER':
            return {...state, error:'', authenticated: true};

        case 'UNAUTH_USER':
            return {...state, authenticated: false};

        case 'AUTH_ERROR':
            return {...state, error: action.payload};
        case 'FETCH_MESSAGE':
            return { ...state, message: action.payload};
        case 'BOOK_SELECTED':
            return { ...state, book: action.payload};
    }

    return state;
}