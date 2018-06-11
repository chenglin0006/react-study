export default (state = {cnt: 11,status:false,bookList:[]}, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign({},state,{cnt: state.cnt + 1});
        case 'REDUCE':
            return Object.assign({},state,{cnt: state.cnt - 1});
        case 'TOGGLE':
            return Object.assign({},state,{status:!state.status})
        case 'ADDBOOK':
            return Object.assign({},state,{bookList:[
                    ...state.bookList,
                    action.bookObj
                ]})
        case 'ADDINTERVEL':
            return (dispatch, getState) => {
                setTimeout(function () {
                    let a = getState().cnt;
                    console.log(a,'======');
                    dispatch({type:'ADD'})
                },2000)
            }
        default:
            return state;
    }
}
