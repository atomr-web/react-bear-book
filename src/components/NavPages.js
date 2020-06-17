import React from 'react';
import { Pagination } from 'antd';

export const NavPages = (props) => {
    const { currentPage, paginate, totalPages } = props;    
    
    return(
        <>
            <Pagination
                defaultPageSize={1}
                current={currentPage}
                total={totalPages}
                onChange={paginate}
                style={{ marginTop: "30px" }}
            />
        </>
    )
}