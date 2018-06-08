import React, { Component } from 'react'
import MemoHeader from '../components/memo/MemoHeader'
import MemoListNew from '../components/memo/MemoListNew'
import MemoNav from '../components/memo/MemoNav'

class Memo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MemoHeader></MemoHeader>
                <MemoNav/>
                {this.props.children}
            </div>
        )
    }
}

export default Memo