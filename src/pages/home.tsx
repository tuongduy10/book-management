import { HomeProvider } from '@/_components/home/_hooks/home.store';
import PostList from '@/_components/home/_partials/post-list';
import Dashboard from '@/_shares/_layouts/dashboard/dashboard';
import * as React from 'react';

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
