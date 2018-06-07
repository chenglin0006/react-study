export default (state = {bookStatus:true,
    bookList:[]}, action) => {
    switch (action.type) {
        case 'TOGGLEBOOKSTATUS':
            state.bookStatus = !state.bookStatus
            return state
        case 'ADDBOOK':
            state.bookList.push(action.bookObj);
            return state
        default:
            return state
    }
}
