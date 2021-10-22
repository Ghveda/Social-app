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
    switch (action.type) {
        case 'GET_TOKEN':
            return action.payload;
        default:
            return state;
    }
}

const matchedToken = (state = null, action) => {
    switch (action.type) {
        case 'MATCH_TOKEN':
            return action.payload;
        default:
            return state;
    }
}

const logoutButtonReducer = (state = false, action) => {
    switch (action.type) {
        case 'TURN_BUTTON':
            return action.payload;
        default:
            return state;
    }
}

const handlleError = (state = false, action) => {
    switch (action.type) {
        case 'ERROR_TYPE':
            return action.payload;
        default:
            return state;
    }
}

const allData = combineReducers({
    getAllPosts: getAllPosts,
    users: getAllUsers,
    tokenReducer: getTokenReducer,
    logout: logoutButtonReducer,
    handlleError,
    matchedToken
});


export default allData;