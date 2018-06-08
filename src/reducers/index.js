// var stateDefault = {
//   count:0,
//   bookStatus:true,
//   bookList:[],
// }
//
// export default (state = stateDefault, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       state.count++
//       return state
//     case 'DECREMENT':
//       state.count--
//       return state
//     case 'TOGGLEBOOKSTATUS':
//       state.bookStatus = !state.bookStatus
//       return state
//     case 'ADDBOOK':
//       state.bookList.push(action.bookObj);
//       return state
//     default:
//       return state
//   }
// }

import { combineReducers } from 'redux'
import count from './count'
import book from './book'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    book,
    count
});

export default rootReducer;
