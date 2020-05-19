import React from "react";
import { Col, Card, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export const BeerItem = (props) => {

    const {image_url, name, tagline, brewed, id, handleClick} = props;    

    console.log(props);
    

    const style = {padding: '8px'}

    return (
        <>
            <Col lg={{ span: 6 }} xs={{ span: 12 }} style={style}>
                <Card className="beer-item">
                    <div className="img-container">
                        <img
                            src={image_url}
                            alt={name}
                        />
                    </div>
                    <div className="beer-item__title">
                        <Title level={4}>{name}</Title>
                    </div>
                    <div className="beer-item__tagline">
                        <Text strong>{tagline}</Text>
                    </div>
                    <div className="beer-item__date">
                        <Text>First brewed: </Text>
                        <Text strong>{brewed}</Text>
                    </div>
                    <Link to={`/id${id}`} onClick={handleClick}>
                        More info
                    </Link>
                </Card>
            </Col>
        </>
    );
};
