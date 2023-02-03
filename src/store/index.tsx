import { useContext } from 'react';
import { BookContext, Example1Context, Example2Context } from './context';

export const useBookStore = () => {
    const [state, dispatch] = useContext(BookContext);
    return [state, dispatch];
}

export const useExample1Store = () => {
    const [state, dispatch] = useContext(Example1Context);
    return [state, dispatch];
}

export const useExample2Store = () => {
    const [state, dispatch] = useContext(Example2Context);
    return [state, dispatch];
}
