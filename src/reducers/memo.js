export default (state = {memoList:[],oldMemoList:[{memoDesc:'456'}]}, action) => {
    switch (action.type) {
        case 'ADDMEMO':
            return Object.assign({},state,{memoList:[
                    ...state.memoList,
                    action.memoObj
                ]})
        case 'CHANGEMEMO':
            return Object.assign({},state,{memoList:state.memoList.map(todo =>
                    (todo.id === action.id)
                        ? {...todo, completed: !todo.completed}
                        : todo
                )})
        default:
            return state;
    }
}
