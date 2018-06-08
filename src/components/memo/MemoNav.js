import React, { Component } from 'react'
import { Link } from 'react-router';

class MemoNav extends Component {
    render(){
        return (
            <div>
                <div>
                    <ul role="nav">
                        <li><Link to="new">new</Link></li>
                        <li><Link to="old">completed</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MemoNav