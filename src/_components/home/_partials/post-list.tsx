
import { useEffect } from "react";
import { actions, stores } from "../_hooks";
import { getAllPosts } from "../_services/post.service";


const PostList = () => {
    const [state, dispatch] = stores.usePostStore();

    const handleAddNew = () => {
        const newVal = {
            id: 'no.4',
            value: 'Post 4'
        };
        dispatch(actions.setPost(newVal));
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPosts();
            if (data) {
                dispatch(actions.fetchPost(data));
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div>List</div>
            <button onClick={handleAddNew}>Add</button>
            <ul>
                {state.posts ? state.posts.map((item: any) => (
                    <li key={`post-${item.id}`}>{item.title}</li>
                )) : null}
            </ul>
        </div>
    )
}

export default PostList;