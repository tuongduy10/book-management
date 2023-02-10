import { IAction } from "@/_cores/_interfaces/state";

export const initPostState = {
    posts: [
        { id: 'no.1', value: 'Post 1' },
        { id: 'no.2', value: 'Post 2' },
        { id: 'no.3', value: 'Post 3' },
    ]
}

export function postReducer(state: any, action: IAction) {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        }
        case 'UPDATE_POST':
            return { ...state.posts };
        case 'DELETE_POST':
            return { ...state.posts };
        default:
            return state;
    }
}