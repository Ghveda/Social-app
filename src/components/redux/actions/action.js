export const tokenAction = (data) => {
    if (data==='') {
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