export const increment = nr => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const million = () => {
    return {
        type: 'MILLION'
    }
}