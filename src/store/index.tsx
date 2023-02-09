import { useContext } from 'react';
import { BookContext, PostContext } from './context';

export const useBookStore = () => {
    const [state, dispatch] = useContext(BookContext);
    return [state, dispatch];
}

export const usePostStore = () => {
    const [state, dispatch] = useContext(PostContext);
    return [state, dispatch];
}