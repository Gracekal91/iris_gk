import {useState} from 'react';
import {FetchData} from "../services/api";

export const useFetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (url) => {
        try{
            setLoading(true);
            setError('');

            const data = await FetchData(url);
            setData(data);

        }catch (error) {
            setError('Error while fetching data')
        }finally{
            setLoading(false);
        }
    }

    return {
        data,
        loading,
        error,
        fetchData,
    }
};