import { createContext, useContext, useMemo, useReducer } from "react";
import { bookReducer, initBookState } from "./book.reducer";


const BookContext = createContext<any>(null);

export const useBookStore = () => {
    const [state, dispatch] = useContext(BookContext);
    return [state, dispatch];
}

export const BookProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(bookReducer, initBookState);
    const providerValue = useMemo(() => [state, dispatch], [state, dispatch]);
    
    return (
        <BookContext.Provider value={providerValue}>
            {children}
        </BookContext.Provider>
    )
}