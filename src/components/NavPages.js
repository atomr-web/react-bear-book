import React from 'react';
import { Pagination } from 'antd';

export const NavPages = (props) => {
    const { currentPage, paginate, totalPages } = props; 

    return (
        <>
            <Pagination
                current={currentPage}
                total={totalPages + '0'}
                onChange={paginate}
            />
        </>
    )
}