import { IAction } from "../../../../_cores/_interfaces/state";
import { POST_ACTION } from "../../_enums/home.enum";

export const setPost = (payload: any): IAction => ({
    type: POST_ACTION.ADD_POST,
    payload: payload
})