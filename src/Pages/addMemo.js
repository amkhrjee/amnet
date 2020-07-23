import React, { Component } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'
import { connect } from 'react-redux';
import { addMemo } from '../Actions/memoActions';


class AddMemo extends Component{
    state={
        memo: ""
    }
    handleSubmit = e => {
        this.props.addMemo(this.state)
        this.props.history.push('/amnet/main')
    }
    render(){
        return(
            <div className="add-wrapper">
                <p className="add-title">ADD A LOG <span role="img" aria-label="emoji"> ✍🏻</span></p>
                <div className="editor">
                    <CKEditor
                        editor={ClassicEditor}
                        className="editor"
                        data={this.state.text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            this.setState({
                                memo: data
                            })
                        }} 
                    />
                </div>
               <a onClick={this.handleSubmit}>
               <div className="add-button-wrapper">
                    <div className="button">
                        <p id="button-text-d">Post To Public 🌎</p>
                        <div className="button-wrapper"></div>
                    </div>
                </div>
               </a>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log(state);
//     return{
//         auth: state.firebase.auth
//     }
// }

const mapDispatchToProps = dispatch => {
    return{
        addMemo: memo => dispatch(addMemo(memo))
    }
}

export default connect(null, mapDispatchToProps)(AddMemo);