const initPostState = {
    posts: [
        { id: 'no.1', value: 'Post 1' },
        { id: 'no.2', value: 'Post 2' },
        { id: 'no.3', value: 'Post 3' },
    ],
    inputPost: null as any
}

function postReducer(state: any, action: any) {
    switch (action.type) {
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

export { initPostState }
export default postReducer