import {useMutation} from 'react-query';
import {FetchData} from '../services/api';

export const useHeadersMutation = () =>{
    return useMutation((path ) => {
        console.log('datas from auth queries', path.url)
        return FetchData(path.url);
    });
};