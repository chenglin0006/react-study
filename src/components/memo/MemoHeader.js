import React, { Component } from 'react'
import {connect} from "react-redux";

class MemoHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            memoDesc:'memo',
            id:1
        }
        this.submitFun = this.submitFun.bind(this);
    }

    changeMemo(e,type){
        this.setState({memoDesc:e.target.value})
    }

    submitFun(){
        let memo = {
            id:this.state.id,
            memoDesc:this.state.memoDesc,
            completed:false
        }
        this.setState({id:this.state.id+1});
        this.props.addMemoFun(memo);
    }

    render(){
        const {addMemoFun} = this.props;
        return (
            <div>
                <input value={this.state.memoDesc} onChange={(e)=>this.changeMemo(e)}/>
                <button onClick={()=>this.submitFun()}>添加</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        memoList: state.memo.memoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMemoFun: (memoObj) =>{
            dispatch({type:'ADDMEMO',memoObj});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemoHeader)