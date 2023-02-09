import { usePostStore } from "../../../store";

const PostList = () => {
    const [state, dispatch] = usePostStore();
    console.log(state)
    return (
        <>
            <div>List</div>
            <ul>
                {state.posts ?? state.posts.map((item: any) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </>
    )
}

export default PostList;