import { useMemo, useReducer } from "react";
import { BookContext, PostContext } from "./context";
import bookReducer,  { initBookState } from "../reducer/book.reducer";
import postReducer, { initPostState} from "../reducer/post.reducer";

function BookProvider({children}: any) {
    const [state, dispatch] = useReducer(bookReducer, initBookState);
    const providerValue = useMemo(() => ({state, dispatch}), [state, dispatch]);
    
    return (
        <BookContext.Provider value={providerValue}>
            {children}
        </BookContext.Provider>
    )
}

function PostProvider({children}: any) {
    const [state, dispatch] = useReducer(postReducer, initPostState);
    const providerValue = useMemo(() => ({state, dispatch}), [state, dispatch]);
    
    return (
        <PostContext.Provider value={providerValue}>
            {children}
        </PostContext.Provider>
    )
}

export { BookProvider, PostProvider };