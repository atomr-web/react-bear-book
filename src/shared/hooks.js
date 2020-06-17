import { useEffect, useState } from 'react';

export const useFiltredData = (data, VISIBLE) => {
    const [renderingData, setRenderingData] = useState([]);
    const [query, setQuery] = useState('');    

    useEffect(() => {
        let filtredData = [];

        let sourceData = data.filter(item =>
            item.name.toLowerCase().startsWith(query.toLowerCase())
        )

        for (let i = 0; i < Math.ceil(sourceData.length / VISIBLE); i++) {
            filtredData[i] = sourceData.slice(i * VISIBLE, i * VISIBLE + VISIBLE);
        };
        
        setRenderingData(filtredData);
                     
    }, [VISIBLE, data, query])
    
    return [query, setQuery, renderingData];
}

export const useBottomItems = (items, maxRange) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [renderingItems, setRenderingItems] = useState([]);

    useEffect(() => {
        const randomIds = [];
        const tempData = [];

        function getRandomItems(min, maxRange) {

            for(let i = 0; randomIds.length < 4; i++) {
                let randomInt =  Math.round( Math.random() * (maxRange - min) + min );

                if(!randomIds.includes(randomInt)) {
                    randomIds.push(randomInt)
                }
            }
            
            randomIds.map(int => {
                return tempData.push(items.find(item => item['id'] === int));
            });
        }

        getRandomItems(1, maxRange);
        setRenderingItems(tempData);
        setIsLoaded(true);

    }, [items, maxRange])
    
    return [renderingItems, isLoaded];
}