import * as React from 'react';
import Dashboard from '@/_shares/_layouts/dashboard/dashboard';
import PostList from './_components/post-list';
import { HomeProvider } from './_hooks/home.store';
export default function Index() {
    return (
        <HomeProvider >
            <PostList />
        </HomeProvider>
    );
}

Index.getLayout = function getLayout(page: React.ReactElement) {
    return <Dashboard>{page}</Dashboard>;
};
