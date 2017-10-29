import { combineReducers } from 'redux';
import RecordsReducer from './reducer_records';

const rootReducer = combineReducers({
    records: RecordsReducer
});

export default rootReducer;
