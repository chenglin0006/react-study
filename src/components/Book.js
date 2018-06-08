import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import { Link } from 'react-router';

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

    render(){
        const {value,status,bookList, reduceHandler, addHandler,toggleFun,addBookFun} = this.props;
        return (
            <div>
                {status==true?'true':'false'}
                <p>{value}</p>
                <button onClick={reduceHandler}>-</button>
                <button onClick={addHandler}>+</button>
                <button onClick={toggleFun}>change</button>
                <input placeholder="请输入书名" value={this.state.bookName} onChange={(e)=>this.changeName(e,'name')}/>
                <input placeholder="请输入作者" value={this.state.bookAuthor} onChange={(e)=>this.changeName(e,'author')}/>
                <button onClick={()=>this.submitFun()}>新增</button>
                <div>
                    <div>
                        {bookList.map((book,i) =>
                            <BookItem key={i} bookObj={book}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.book.cnt,
        status:state.book.status,
        bookList:state.book.bookList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reduceHandler: () => {
            dispatch({type: 'REDUCE'});
        },
        addHandler: () => {
            dispatch({type: 'ADD'});
        },
        toggleFun: () => {
            dispatch({type: 'TOGGLE'});
        },
        addBookFun: (bookObj) =>{
            dispatch({type: 'ADDBOOK',bookObj});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Book)