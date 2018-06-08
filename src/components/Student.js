import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Student extends Component {
    constructor(props) {
        super(props);
        this.resetFun = this.resetFun.bind(this);
    }

    resetFun(){
        debugger
        this.props.resetDesc()
    }

    render() {
        const {student,studentDesc,resetDesc} = this.props
        return (
            <div>
                <div>{student.name}</div>
                <div>{student.age}</div>
                <div>{studentDesc}</div>
                <div>--------</div>
                <button onClick={()=>this.resetFun()}>重置</button>
            </div>
        )
    }
}

Student.propTypes = {
    student:PropTypes.object.isRequired,
    studentDesc:PropTypes.string.isRequired,
    resetDesc:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    studentDesc: state.student.studentDesc
})

const mapDispatchToProps = (dispatch) => ({
    resetDesc: () => dispatch({type:'RESETDESC'})
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Student)