export const addMemo = (memoObj) => ({
    type: 'ADDMEMO',
    memoObj
})

export const changeMemoStatus = (id) => ({
    type: 'CHANGEMEMO',
    id
})
