// import { IAction } from "@/_cores/_interfaces/state";
import { IAction } from "../../../../_cores/_interfaces/state";
import { POST_ACTION } from "../../_enums/home.enum";

export const initPostState = {
    posts: [ ]
}

export function postReducer(state: any, action: IAction) {
    switch (action.type) {
        case POST_ACTION.FETCH_POST: {
            return {
                ...state,
                posts: action.payload
            };
        }
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