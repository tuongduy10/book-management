import { usePostStore } from "../../../store/post.store";

const PostList = () => {
    const [state, dispatch] = usePostStore();
    return (
        <>
            <div>List</div>
            <ul>
                {state.posts ? state.posts.map((item: any) => (
                    <li key={item.id}>{item.value}</li>
                )) : null}
            </ul>
        </>
    )
}

export default PostList;