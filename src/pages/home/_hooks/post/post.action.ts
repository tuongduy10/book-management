import { IAction } from "../../../../_cores/_interfaces/state";

export const setPost = (payload: any): IAction => ({
    type: "ADD_POST",
    payload: payload
})