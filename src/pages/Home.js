import React from 'react';
import { BeerItems } from '../components/BeerItems'
import { NavPages } from '../components/NavPages';
import { Input, Divider } from 'antd';

const { Search } = Input;

export const Home = (props) => {

    const { 
        query, 
        changeQuery, 
        renderingData, 
        currentPage, 
        isLoaded,
        totalPages,
        paginate
    } = props;
    
    return (
        <div>
            <Search
                placeholder="Search by name"
                style={{ width: 298 }}
                allowClear
                value={query}
                onChange={changeQuery}
            />
            <Divider
                orientation="center"
                style={{ color: "#333", fontWeight: "bold" }}
            >
                {renderingData.flat().length} beers found
            </Divider>
            <BeerItems
                renderingData={renderingData}
                currentPage={currentPage} 
                isLoaded={isLoaded}
            />
            {totalPages > 1 ?
                <NavPages 
                    currentPage={currentPage + 1} 
                    paginate={paginate} 
                    totalPages={totalPages}
                />
            : null}
        </div>
    )
    
}



