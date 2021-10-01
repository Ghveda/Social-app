import { combineReducers } from "redux"


const getToken = (state = null, action) => {
    switch (action.type) {
        case 'TOKEN':
            return action.payload;
        case 'NULL':
            return state;
        default:
            return state;
    }
}

const getVerification = (state = null, action) => {
    switch (action.type) {
        case 'TRUE':
            return action.payload;
        case 'FALSE':
            return action.payload;
        default:
            return state
    }
}

const allData = combineReducers({
    getToken: getToken,
    getVerification: getVerification

});

export default allData;