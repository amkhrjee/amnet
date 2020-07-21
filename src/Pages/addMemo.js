import React, { Component } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'

class AddMemo extends Component{
    state={
        text: ""
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
                                text: data
                            })
                        }} 
                    />
                </div>
                <div className="add-button-wrapper">
                    <div className="button">
                        <p id="button-text-d">Post To Public 🌎</p>
                        <div className="button-wrapper"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddMemo;