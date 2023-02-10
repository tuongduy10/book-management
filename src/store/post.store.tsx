import { createContext, useContext, useMemo, useReducer } from "react";
import { postReducer, initPostState } from "../reducer/post.reducer";

const PostContext = createContext<any>(null);

export const usePostStore = () => {
    const [state, dispatch] = useContext(PostContext);
    return [state, dispatch];
}

export const PostProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(postReducer, initPostState);
    const providerValue = useMemo(() => [state, dispatch], [state, dispatch]);
    
    return (
        <PostContext.Provider value={providerValue}>
            {children}
        </PostContext.Provider>
    )
}
