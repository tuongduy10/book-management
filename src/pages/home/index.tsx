import * as React from 'react';
import Dashboard from '../../layouts/dashboard/dashboard';
import { PostProvider } from '../../store/provider';
import PostList from './components/post-list';
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
