export const addBook = bookObj => ({
    type: 'ADDBOOK',
    bookObj
})

export const toogleBookStatus = () => ({
    type: 'TOGGLEBOOKSTATUS'
})