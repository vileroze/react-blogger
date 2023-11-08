import { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const getAllData = async () => {
            try {
                const allData = await fetch(url, { signal: abortController.signal });
                if (!allData.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                const allDataJson = await allData.json();
                setData(allDataJson);
                setLoading(false);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('abort error');
                } else {
                    setError(err.message); // Set the error state
                    setLoading(false);
                }
            }
        }

        getAllData();

        return () => { abortController.abort(); }

    }, [url]);


    const handleDeleteIndData = (id) => {
        setData(data.filter((d) => d.id !== id));
    }

    return { data, loading, error, handleDeleteIndData };
}

export default useFetchData