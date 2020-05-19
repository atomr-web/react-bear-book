import React from 'react';
import { Row, Col, Typography, Descriptions } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export const BeerItemPage = (props) => {
    return (
        <div className="inner-page">
            <Row gutter={32}>
                <Col span={5} className="inner-page__image">
                    <img
                        src="https://images.punkapi.com/v2/keg.png"
                        alt="Trashy Blonde"
                    />
                </Col>
                <Col span={19} className="inner-page__content">
                    <Title>Buzz</Title>
                    <Title level={3}>A Real Bitter Experience.</Title>
                    <Descriptions>
                        <Descriptions.Item label="label">
                            Value
                        </Descriptions.Item>
                    </Descriptions>
                    <Link to='/'>Back</Link>
                </Col>
            </Row>
        </div>
    )
} 