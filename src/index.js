import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import Book from './components/Book'
import reducer from './reducers/index'

const store = createStore(reducer)
console.log(store.getState(),'====');
const rootEl = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState().count.count}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
      <Book
        bookList={store.getState().book.bookList}
        bookStatus = {store.getState().book.bookStatus}
        addBookFun={(bookObj)=>{store.dispatch({type:'ADDBOOK',bookObj})}}
        toggleBookStatusFun={()=>store.dispatch({ type: 'TOGGLEBOOKSTATUS' })}/>
    </div>,
    rootEl
  )
}

render()
store.subscribe(render)
