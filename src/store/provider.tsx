import { useMemo, useReducer } from "react";
import { BookContext, Example1Context, Example2Context } from "./context";
import bookReducer,  { initBookState } from "../reducer/book.reducer";
import example1Reducer, { initExample1State } from "../reducer/example1.reducer";
import example2Reducer, { initExample2State } from "../reducer/example2.reducer";

function BookProvider({children}: any) {
    const [state, dispatch] = useReducer(bookReducer, initBookState);
    const providerValue = useMemo(() => ({state, dispatch}), [state, dispatch]);
    
    return (
        <BookContext.Provider value={providerValue}>
            {children}
        </BookContext.Provider>
    )
}

function Example1Provider({children}: any) {
    const [state, dispatch] = useReducer(example1Reducer, initExample1State);
    const providerValue = useMemo(() => ({state, dispatch}), [state, dispatch]);
    
    return (
        <Example1Context.Provider value={providerValue}>
            {children}
        </Example1Context.Provider>
    )
}

function Example2Provider({children}: any) {
    const [state, dispatch] = useReducer(example2Reducer, initExample2State);
    const providerValue = useMemo(() => ({state, dispatch}), [state, dispatch]);
    
    return (
        <Example2Context.Provider value={providerValue}>
            {children}
        </Example2Context.Provider>
    )
}

export { BookProvider, Example1Provider, Example2Provider };