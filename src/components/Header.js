import React, { Component } from 'react'
import { Link } from 'react-router';

class Header extends Component {
    render(){
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/">book</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="message">message</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header