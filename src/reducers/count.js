export default (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state.count++
            return state
        case 'DECREMENT':
            state.count--
            return state
        default:
            return state
    }
}
