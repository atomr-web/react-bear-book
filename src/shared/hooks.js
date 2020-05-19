import  { useEffect } from 'react'

export const getItems = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = "https://api.punkapi.com/v2/beers?per_page=80";

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

    return [isLoaded, items]
} 