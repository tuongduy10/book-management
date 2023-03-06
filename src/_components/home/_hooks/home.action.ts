import { IAction } from "@/_cores/_interfaces/state.interface";
import { BOOK_ACTION, POST_ACTION } from "../_enums/home.enum";

export const setPost = (payload: any): IAction => ({
    type: POST_ACTION.ADD_POST,
    payload: payload
});

export const fetchPost = (payload: any): IAction => ({
    type: POST_ACTION.FETCH_POST,
    payload: payload
});

export const setBook = (payload: any): IAction => ({
    type: BOOK_ACTION.ADD_BOOK,
    payload: payload
});