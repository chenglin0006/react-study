import React, { Component } from 'react'
import {connect} from "react-redux";
import MemoItem from './MemoItem'


class MemoListNew extends Component {

    show(list) {
        const content = list.map((ele,index)=>
            <div key={index}>{ele.memoDesc}</div>
        );
        return (
            <div>
            {content}
        </div>
        );
    }

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
            return item.completed==false;
        })
    }
}

export default connect(
    mapStateToProps
)(MemoListNew)