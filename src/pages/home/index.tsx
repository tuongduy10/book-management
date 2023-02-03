import * as React from 'react';
import Dashboard from '../../layouts/dashboard/dashboard';
import PrimaryLayout from '../../layouts/primary/primary-layout';

export default function Index() {
    return (
        <div>Home</div>
    );
}

Index.getLayout = function getLayout(page: React.ReactElement) {
    return <Dashboard>{page}</Dashboard>;
};
