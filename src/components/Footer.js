import React from 'react';
import { Typography, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons'

const { Text, Link } = Typography;

export const Footer = () => {

    return (
        <footer>

            <Space direction="vertical">
                <Text strong>
                    Made on React, Antd and enthusiasm by <Link href="https://github.com/atomr-web" target="_blank">atomr</Link>
                </Text>
                <Text>
                    <GithubOutlined /> <Link href="https://github.com/atomr-web/react-bear-book" target="_blank">Repository</Link>
                </Text>
            </Space>

        </footer>
    )
}