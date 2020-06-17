import React from 'react';
import { Typography, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export const Header = (props) => {

    const {pathname} = props;

    return (
        <header>
            <Title level={3}>
                Beer Book App
            </Title>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                </Breadcrumb.Item>
                {
                    pathname.length > 1 
                    ?   <Breadcrumb.Item>
                            {pathname.slice(1)}
                        </Breadcrumb.Item>
                    : null
                }
                
            </Breadcrumb>
        </header>
    )
}