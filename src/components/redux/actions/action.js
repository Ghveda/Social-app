import axios from "axios"


export const fetchAll = (action) => ({
    type: 'GET_ALL',
    payload: action
})


export const fetchAllPosts = () => {
    return dispatch => {
        axios.post('http://localhost:3000/posts/data').then(res => dispatch(fetchAll(res.data)))
    }
}


export const deleteWithId = (id) => {
    return dispatch => {
        axios.post('http://localhost:3000/posts/delete', {
            id: id
        }).then(() => dispatch(fetchAllPosts()))
    }
}


export const fetchUsers = (action) => ({
    type: 'USERS',
    payload: action
})


export const fetchAllUsers = () => {
    return dispatch => {
        axios.post('http://localhost:3000/users/allUsers')
            .then(state => dispatch(fetchUsers(state.data)))
    }
}


export const updatePost = (id, data) => {
    return dispatch => {
        axios.post('http://localhost:3000/posts/update', {
            id: id,
            data: data
        })
            .then(() => dispatch(fetchAllPosts()))
    }
}


export const addNewPosts = (post, storage) => {
    return dispatch => {
        axios.post('http://localhost:3000/posts/create', {
            username: storage,
            post: post
        })
            .then(() => dispatch(fetchAllPosts()))
    }
}

export const getToken = (token) => ({
    type: 'GET_TOKEN',
    payload: token
})

export const matchToken = (token) => ({
    type: 'MATCH_TOKEN',
    payload: token
})

export const getError = (token) => ({
    type: 'ERROR_TYPE',
    payload: token
})

export const logoutButton = (action)=>({
    type: 'TURN_BUTTON',
    payload: action
})