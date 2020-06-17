import React from "react";
import { useBottomItems } from '../shared/hooks'
import { BeerItem } from '../components/BeerItem';
import { Row, Divider } from 'antd';

export const InnerBottomItems = (props) => {
    const { items, amountItems } = props;

    const [renderingItems, isLoaded] = useBottomItems(items, amountItems);    

    return (
        <>
            <Row gutter={16}>
                <Divider
                    orientation="center"
                    style={{ color: "#333", fontWeight: "bold" }}
                >
                    Another beers
                </Divider>
                {
                    isLoaded ? 
                        <Row gutter={16}>
                            {
                                renderingItems.map(item => {
                                    return (
                                        <BeerItem
                                            key={item.id}
                                            image_url={item.image_url}
                                            name={item.name}
                                            tagline={item.tagline}
                                            brewed={item.first_brewed}
                                            id={item.id}
                                        />
                                    )
                                })
                            }
                        </Row>
                    : <div>Loading...</div>
                }
                
            </Row>
        </>
    );
};
