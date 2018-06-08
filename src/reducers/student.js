export default (state = {studentDesc:'1231726381263'}, action) => {
    switch (action.type) {
        case 'RESETDESC':
            debugger
            state.studentDesc = state.studentDesc+'DESC'
            return state
        default:
            return state
    }
}
