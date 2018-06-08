import React, { Component } from 'react'
import { Link } from 'react-router';
import Header from './Header'

class Index extends Component {
    render(){
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default Index