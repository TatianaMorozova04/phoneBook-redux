import {combineReducers} from "redux";
import types from './appTypes';

const contacts = (state = [], {type, payload}) => {
    switch (type) {
        case types.GET_SUCCESS:
            return payload
        case types.DELETE_SUCCESS:
            return state.filter(contact => contact.id !== payload)
        case types.ADD_SUCCESS:
            return [...state,payload]
        default:
            return state;
    }
};

const filter = (state = '', {type, payload}) => {
    switch (type) {
        case types.FILTER:
            return payload;
        default:
            return state;
    }
};

export default combineReducers({
        contacts,
        filter
    }
)
