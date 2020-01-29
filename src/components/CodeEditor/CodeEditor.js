import React, { Component } from 'react';
import './CodeEditor.css'

class CodeEditor extends Component {
    render() {
        return (
            <div className="code-editor-container">
                <textarea className="editor-text-input">

                </textarea>
            </div>
        )
    }
}

export default CodeEditor
