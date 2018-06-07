import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {bookObj} = this.props
        return (
            <div>
                <div>{bookObj.name}</div>
                <div>{bookObj.author}</div>
                <div>--------</div>
            </div>
        )
    }
}

BookItem.propTypes = {
    bookObj:PropTypes.object.isRequired,
}

export default BookItem