import React, { Component } from 'react'
import {connect} from "react-redux";
import MemoItem from './MemoItem'


class MemoListOld extends Component {

    render(){
        const {memoList} = this.props;
        return (
            <div>
                <div>
                    {memoList.map((memo,i) =>
                        <MemoItem key={i} memoObj={memo}/>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        memoList:state.memo.memoList.filter((item,index)=>{
            return item.completed;
        })
    }
}

export default connect(
    mapStateToProps
)(MemoListOld)