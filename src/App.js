import React from 'react'
import Student from './components/Student'

var studentObj = {name:'jhon',age:13};

const App = () => (
    <div>
        <Student student={studentObj}></Student>
    </div>
)

export default App
