const counterReducer = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        case 'MILLION':
            return 100000
        default:
            return 0;
    }
}
export default counterReducer;