import axios from 'axios';

const BASE_URL = 'http://localhost:3600/api/v1';

export const FetchData = async(url)=>{
    try{
        const response = await axios.get(`${BASE_URL}/${url}`);
        const {data} = response;
        return data
    }catch (error) {
        throw error;
    }
}