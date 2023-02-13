// import { IAction } from "@/_cores/_interfaces/state";
import { IAction } from "../../../../_cores/_interfaces/state";
import { POST_ACTION } from "../../_enums/home.enum";

export const initPostState = {
    posts: [
        { id: 'no.1', value: 'Post 1' },
        { id: 'no.2', value: 'Post 2' },
        { id: 'no.3', value: 'Post 3' },
    ]
}

export function postReducer(state: any, action: IAction) {
    switch (action.type) {
        case POST_ACTION.ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        }
        case POST_ACTION.UPDATE_POST:
            return { ...state.posts };
        case POST_ACTION.DELETE_POST:
            return { ...state.posts };
        default:
            return state;
    }
}