import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {changeMemoStatus} from "../../actions/index"

class MemoItem extends Component {
    constructor(props) {
        super(props);
        this.changeMemoStatus = this.changeMemoStatus.bind(this);
    }

    changeMemoStatus(id){
        console.log(id);

    }

    render() {
        const {memoObj,changeMemoStatus} = this.props
        return (
            <div>
                <div onClick={()=>changeMemoStatus(memoObj.id)}>{memoObj.memoDesc}-{memoObj.id}-{memoObj.completed==true?'true':'false'}</div>
            </div>
        )
    }
}

MemoItem.propTypes = {
    memoObj:PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMemoStatus: (id) =>{
            dispatch(changeMemoStatus(id));
        }
    }
}

export default connect(null,mapDispatchToProps)(MemoItem)