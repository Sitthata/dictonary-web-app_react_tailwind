import { useState, useEffect } from 'react'

const useDictonary = (word) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (error) {
                setError(error);  
                setData(null); 
            } finally {
                setLoading(false);
            }
        }
        if (word !== "") {
            fetchData();
        }
    }, [word])

  return [ loading, data, error ]
}

export default useDictonary