import axios from 'axios';
const PORT = 3000;
export const ROOT_URL = `http://104.236.21.62:${PORT}/`;
export const API_RECORDS = 'api/records';

export const FEATCH_RECORDS = 'FEATCH_RECORDS';

export function fetchRecords() {
    const url = `${ROOT_URL}${API_RECORDS}`;
    const request = axios.get(url);

    console.log(`about to make action, url=${url}`);
    
    return {
        type: FEATCH_RECORDS,
        payload: request
    };
}

