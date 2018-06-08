import React from 'react'
import Book from './components/Book'
import About from './components/About'
import Memo from './container/Memo'
import Message from './components/Message'
import Index from './components/Index'
import MemoListNew from './components/memo/MemoListNew'
import MemoListOld from './components/memo/MemoListOld'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


//可以用jsx的方式，也可以用普通对象
const routes = {
    path: '/',
    component: Index,
    childRoutes: [
        { path: 'about', component: About },
        { path: 'book', component: Book },
        { path: 'message', component: Message },
    ]
}


const App = () => (
    <div>
        <Router history={hashHistory}>
            <Route path="/" component={Memo}>
                <IndexRoute component={MemoListNew}/>
                <Route path="/new" component={MemoListNew}></Route>
                <Route path="/old" component={MemoListOld}></Route>
            </Route>
            <Route path="/app" component={Index}>
                <IndexRoute component={Book}/>
                <Route path="/book" component={Book}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/message" component={Message}></Route>
            </Route>
        </Router>
        {/*<Router history={hashHistory} routes={routes}> </Router>*/}
    </div>
)

export default App
