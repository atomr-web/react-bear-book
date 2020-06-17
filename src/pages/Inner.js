import React from 'react';
import { InnerBottomItems } from '../components/InnerBottomItems'
import { Empty, Row, Col, Divider, Space, Typography } from 'antd';
import { Link, useParams, useLocation } from "react-router-dom";

const { Title, Text } = Typography;

export const Inner = (props) => {
    const { items, isLoaded, amountItems } = props;

    const location = useLocation();    

    const itemParams = useParams();
    const Itemid = Number(itemParams.id.slice(2));    
    
    const curItem = items.flat().find((el) => {
        return el.id === Itemid;
    });

    if(isLoaded && curItem !== undefined) {
        return(
            <div>
                <Row gutter={16}>
                    <Col span={5} className="inner-page__image">
                        <img
                            src={curItem.image_url}
                            alt={curItem.name}
                        />
                    </Col>
                    <Col span={19} className="inner-page__content">
                        <Title level={1}>{curItem.name}</Title>
                        <Title level={2}>{curItem.tagline}</Title>
                        <Title level={4}>First brewed: {curItem.first_brewed}</Title>
                        <Divider orientation="center" style={{ color: '#333', fontWeight: 'bold' }}>Information</Divider>
                        <Row>
                            <Col span={24} className="inner-page__description-item">
                                <Space direction="vertical">
                                    <Text strong>Description: </Text>
                                    <Text>{curItem.description}</Text>
                                </Space>
                            </Col>
                            <Col span={24} className="inner-page__description-item">
                                <Space direction="vertical">
                                    <Text strong>Brewers tips: </Text>
                                    <Text>{curItem.brewers_tips}</Text>
                                </Space>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Space direction="vertical">
                                    <Text strong>Food pairing:</Text>
                                    <ul>
                                        {
                                            curItem.food_pairing.map((item, i) => <li key={i}>{item}</li>)
                                        }
                                    </ul>
                                </Space>
                                
                            </Col>
                        </Row>
                        <Link to='/'>Back to list</Link>
                    </Col>
                </Row>
                <InnerBottomItems items={items} amountItems={amountItems}/>
            </div>
        )
    } else {
        return(
            <div className="not-found-container">
                <Empty />
                <div className="not-found-container__text">
                    <div>Not found: <Text strong>{location.pathname}</Text></div>
                    <div>Invalid url or id value. Max value for id: <Text strong>{amountItems}</Text></div>
                    <div>Example url: <Text strong>/id1</Text></div>
                </div>
                <Link to='/'>Back to home page</Link>
            </div>
        )
    }
} 