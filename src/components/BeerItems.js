import React from "react";
import { Row, Empty } from "antd";

import { BeerItem } from "./BeerItem";

export const BeerItems = (props) => {
    const {renderingData, isLoaded, currentPage} = props;    

    if(isLoaded && renderingData.length > 0) {
        return (
            <Row gutter={16}>
                {
                    renderingData[currentPage].map(item => {
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
        )
    } else {
        return <Empty/>
    }
    
};
