import { combineReducers } from "redux";
import axios from "axios";
import { fetchAll } from '../actions/action';


// const getToken = (state = null, action) => {
//     switch (action.type) {
//         case 'TOKEN':
//             return action.payload;
//         case 'NULL':
//             return state;
//         default:
//             return state;
//     }
// }

// const getVerification = (state = null, action) => {
//     switch (action.type) {
//         case 'TRUE':
//             return action.payload;
//         case 'FALSE':
//             return action.payload;
//         default:
//             return state
//     }
// }

const getAll = (state=null, action) => {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
}

// export const loadNotes = () => async (dispatch, getState) => {
//     const notes = await axios("http://localhost:3000/posts/data").then(res => res.data)
//     console.log(notes)
//     dispatch(fetchAll(notes))
// }

const allData = combineReducers({
    getAll: getAll
});

export default allData;