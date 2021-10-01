export const tokenAction = (data) => {
    if (data === '') {
        return {
            type: 'NULL',
            payload: ''
        }
    } else {
        return {
            type: 'TOKEN',
            payload: data
        }
    }
}

export const verification = (data) => {
    if (data === true) {
        return {
            type: 'TRUE',
            payload: data
        }
    } else {
        return {
            type: 'FALSE',
            payload: data
        }
    }
}