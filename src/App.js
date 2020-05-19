import React from "react";
import "antd/dist/antd.css";

import { Header } from "./components/Header";
import { Content } from './components/Content';

const url = 'https://api.punkapi.com/v2/beers?per_page=80'

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Content url={url} />

                {/* footer */}
            </div>
        </div>
    );
};

export default App;