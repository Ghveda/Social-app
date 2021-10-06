import { combineReducers } from "redux";

const getAll = (state = null, action) => {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
}


const getAllUsers = (state = null, action) => {
    switch (action.type) {
        case 'USERS':
            return action.payload;
        default:
            return state;
    }
}


const allData = combineReducers({
    getAll: getAll,
    users: getAllUsers
});

export default allData;