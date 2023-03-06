import { createContext, useContext, useMemo, useReducer } from "react";
import { initHomeState, homeReducer } from "./home.reducer";

const PostContext = createContext<any>(null);

export const usePostStore = () => {
    const [state, dispatch] = useContext(PostContext);
    return [state, dispatch];
}

export const HomeProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(homeReducer, initHomeState);
    const providerValue = useMemo(() => [state, dispatch], [state, dispatch]);
    
    return (
        <PostContext.Provider value={providerValue}>
            {children}
        </PostContext.Provider>
    )
}