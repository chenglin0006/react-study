import React from 'react'
import Book from './components/Book'
import About from './components/About'
import Message from './components/Message'
import Index from './components/Index'
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
            <Route path="/" component={Index}>
                <IndexRoute component={Book}/>
                <Route path="/about" component={About}></Route>
                <Route path="/message" component={Message}></Route>
            </Route>
        </Router>
        {/*<Router history={hashHistory} routes={routes}> </Router>*/}
    </div>
)

export default App
