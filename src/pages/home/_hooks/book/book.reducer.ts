export const initBookState = {
    books: [],
    inputBook: ''
}

export const bookReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'ADD':
            return { ...state };
        case 'UPDATE':
            return { ...state };
        case 'DELETE':
            return { ...state };
        default:
            return new Error(`Unhandled  action type ${action.type}`);
    }
}