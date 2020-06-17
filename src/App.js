import React, { useState, useEffect } from "react";
import { getData } from './shared/common'
import { useFiltredData } from './shared/hooks'
import { Header } from "./components/Header";
import { Footer } from './components/Footer'
import { Switch, Route, useLocation } from "react-router-dom";

import { Home } from './pages/Home'
import { Inner } from './pages/Inner'

import { Spin } from 'antd';
import "antd/dist/antd.css";

const BASE_URL = 'https://api.punkapi.com/v2/beers';

// max limit = 80
// min limit = 4
const AMOUNT_ITEMS = 80;

// items per page
const VISIBLE = 8;

const useData = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const amount = AMOUNT_ITEMS >= 4 && AMOUNT_ITEMS <= 80 ? AMOUNT_ITEMS : 80;

    useEffect(() => {
        getData(`${BASE_URL}?per_page=${amount}`).then((result) => {
            setData(result)
            setIsLoaded(true);
        });
    }, [amount]);

    return [data, isLoaded];
}

const App = () => {
    const [data, isLoaded] = useData();
    const [query, setQuery, renderingData] = useFiltredData(data, VISIBLE);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const { pathname } = useLocation();

    useEffect(() => {
        setTotalPages(renderingData.length)
    }, [renderingData])

    useEffect(() => {
        window.scrollTo(0, 0);
        setQuery('');
    }, [pathname, setQuery])

    const paginate = (page) => {
        setCurrentPage(page - 1);        
    }
    
    const changeQuery = (e) => {
        setQuery(e.target.value);
        setTotalPages(renderingData.length);
        setCurrentPage(0)
    }

    return (
        <div className="App">
            <div className="container">
                <Header pathname={pathname}/>
                
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home
                                query={query}
                                changeQuery={changeQuery}
                                renderingData={renderingData}
                                currentPage={currentPage} 
                                isLoaded={isLoaded}
                                paginate={paginate} 
                                totalPages={totalPages}
                            />
                        </Route>
                        
                        <Route path='/:id'>
                            <Inner items={data} isLoaded={isLoaded} amountItems={AMOUNT_ITEMS}/>
                        </Route>
                    </Switch>
                </main>

                <Footer />

                <div className={"spinner " + (isLoaded ? "hide" : "show")  } >
                    <Spin size="large" />
                </div>
            </div>
        </div>
    );
};

export default App;