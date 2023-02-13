
import { actions, stores } from "../_hooks/post";

const PostList = () => {
    const [state, dispatch] = stores.usePostStore();

    const handleAddNew = () => {
        const newVal = { 
            id: 'no.4', 
            value: 'Post 4' 
        };
        dispatch(actions.setPost(newVal));
    }

    return (
        <>
            <div>List</div>
            <ul>
                {state.posts ? state.posts.map((item: any) => (
                    <li key={item.id}>{item.value}</li>
                )) : null}
            </ul>
            <button onClick={handleAddNew}>Add</button>
        </>
    )
}

export default PostList;