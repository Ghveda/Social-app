import { combineReducers } from "redux";

const getAllPosts = (state = null, action) => {
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

const getTokenReducer = (state = null, action) => {
    switch (action) {
        case 'GET_TOKEN':
            return action.payload;
        default:
            return state
    }
}

const allData = combineReducers({
    getAllPosts: getAllPosts,
    users: getAllUsers,
    tokenReducer: getTokenReducer
});


export default allData;