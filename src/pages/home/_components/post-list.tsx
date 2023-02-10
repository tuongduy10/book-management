import { usePostStore } from "../_hooks/post/post.store";

const PostList = () => {
    const [state, dispatch] = usePostStore();

    console.log(state);

    return (
        <>
            <div>List</div>
            <ul>
                {state.posts ? state.posts.map((item: any) => (
                    <li key={item.id}>{item.value}</li>
                )) : null}
            </ul>
            <button onClick={() => dispatch({type: "ADD_POST", payload: { id: 'no.4', value: 'Post 4' }})}>Add</button>
        </>
    )
}

export default PostList;