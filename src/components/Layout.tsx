import React from 'react';
import { Header } from './';

const Layout = (props: {children: React.ReactNode}) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};

export default Layout;