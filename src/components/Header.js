import React from 'react';
import { PageHeader } from 'antd';

export const Header = () => {
    return (
        <header>
            <PageHeader
                className="site-page-header"
                title="Beer book"
            />
        </header>
    )
}