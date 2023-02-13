import { IAction } from "../../../../_cores/_interfaces/state";
import { BOOK_ACTION } from "../../_enums/home.enum";

export const setBook = (payload: any): IAction => ({
    type: BOOK_ACTION.ADD_BOOK,
    payload: payload
})