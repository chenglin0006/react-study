export const addBook = bookObj => ({
    type: 'ADDBOOK',
    bookObj
})

export const toogleBookStatus = () => ({
    type: 'TOGGLE'
})

export const addMemo = (memoObj) => ({
    type: 'ADDMEMO',
    memoObj
})

export const changeMemoStatus = (id) => ({
    type: 'CHANGEMEMO',
    id
})

