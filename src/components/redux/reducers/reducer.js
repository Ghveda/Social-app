import { combineReducers } from "redux"


const getToken = (state=null, action) =>{
    switch(action.type){
        case 'TOKEN':
            return action.payload;
        case 'NULL':
            return state;
        default:
            return state;
    }
}

const allData = combineReducers({
    getToken: getToken
});

export default allData;