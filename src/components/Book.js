import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName:'test',
            bookAuthor:'test2'
        }
        this.submitFun = this.submitFun.bind(this);
    }

    changeName(e,type){
        console.log(e.target.value);
        if(type === 'name'){
            this.setState({bookName:e.target.value})
        } else {
            this.setState({bookAuthor:e.target.value})
        }
    }

    submitFun(){
        let bookObj = {
            name:this.state.bookName,
            author:this.state.bookAuthor
        }
        this.props.addBookFun(bookObj);
    }

    componentDidMount(){
    }

    render() {
        const {bookList,bookStatus,addBookFun,toggleBookStatusFun} = this.props
        return (
            <div>
                <div>
                    {bookStatus==true?'true':'false'}
                    <input placeholder="请输入书名" value={this.state.bookName} onChange={(e)=>this.changeName(e,'name')}/>
                    <input placeholder="请输入作者" value={this.state.bookAuthor} onChange={(e)=>this.changeName(e,'author')}/>
                    <button onClick={this.submitFun}>新增</button>
                    <button onClick={toggleBookStatusFun}>修改</button>
                </div>
                <div>
                    {bookList.map(book =>
                        <BookItem bookObj={book}/>
                    )}
                </div>
            </div>
        )
    }
}

export default Book
