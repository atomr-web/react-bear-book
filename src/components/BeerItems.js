import React from "react";
import { Row } from "antd";

import { BeerItem } from "./BeerItem";

export const BeerItems = (props) => {
    const {items, isLoaded, currentPage, handleClick} = props;   

    if(isLoaded) {
        return (
            <Row gutter={16}>
                {
                    items[currentPage].map(item => {
                        return (
                            <BeerItem
                                key={item.id}
                                image_url={item.image_url}
                                name={item.name}
                                tagline={item.tagline}
                                brewed={item.first_brewed}
                                id={item.id}

                                handeClick={handleClick}
                            />
                        )
                    })
                }
            </Row>
        )
    } else {
        return <div>... Loading</div>
    }
    
    
};
