import * as React from 'react';
import Dashboard from '../../_shares/_layouts/dashboard/dashboard';
import PostList from './_components/post-list';
import { PostProvider } from './_hooks/post/post.store';
export default function Index() {
    return (
        <PostProvider >
            <PostList />
        </PostProvider>
    );
}

Index.getLayout = function getLayout(page: React.ReactElement) {
    return <Dashboard>{page}</Dashboard>;
};
