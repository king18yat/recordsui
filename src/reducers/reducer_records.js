import { FEATCH_RECORDS } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    console.log("action: " + action.type);
    switch(action.type){
        case FEATCH_RECORDS:
            return _.mapKeys(action.payload.data, '_id');
    }
    return state;
}