export const addBook = bookObj => ({
    type: 'ADDBOOK',
    bookObj
})

export const toogleBookStatus = () => ({
    type: 'TOGGLE'
})

export const addInterval = ()=>{
    return (dispatch, getState) => {
        setTimeout(function () {
            let a = getState().book.cnt;
            console.log(a,'======');
            dispatch({type:'ADD'})
        },2000)
    }
}
