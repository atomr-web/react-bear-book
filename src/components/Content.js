import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { BeerItems } from '../components/BeerItems';
import { NavPages } from '../components/NavPages';
import { BeerItemPage } from '../components/BeerItemPage'
import { Spin } from 'antd'

export const Content = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(1);

    const url = props.url;
    const visible = 8;
    const totalPages = items.length

    useEffect(() => {
        const jsonItems = [];
    
        const fetchData = async () => {
          const response = await fetch(url);
          const result = await response.json();
    
          for (let i = 0; i < Math.ceil(result.length / visible); i++) {
            jsonItems[i] = result.slice(i * visible, i * visible + visible);
          }
        };
    
        fetchData().then(() => {
          setItems(jsonItems);
          setIsLoaded(true);
        });
      }, [url]);

    const paginate = (page) => {
        setCurrentPage(page);
    };

    const handleClick = (e) => {
        console.log('click');
    }
    
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <BeerItems 
                        items={items} 
                        currentPage={currentPage - 1} 
                        isLoaded={isLoaded}
                        handeClick={handleClick}
                    />
                    <NavPages currentPage={currentPage} paginate={paginate} totalPages={totalPages}/>
                </Route>
                <Route path="/:id">
                    <BeerItemPage currentItem={currentItem} />
                </Route>
            </Switch>
            
            
            <div className={"spinner " + (isLoaded ? "hide" : "show")  } >
                <Spin size="large" />
            </div>
        </>
    )
}

export default Content