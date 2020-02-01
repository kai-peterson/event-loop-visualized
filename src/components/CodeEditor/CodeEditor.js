import React, { Component } from 'react';
import './CodeEditor.css'

class CodeEditor extends Component {
    state = {
        code: '',
        trigger: false,
        indent: false,
    }

    handleChange = (event) => {
        let lastChar = event.target.value.substring(event.target.value.length - 1, event.target.value.length);
        let lastTwoChar = event.target.value.substring(event.target.value.length - 2, event.target.value.length);
        let stringUpToLast = event.target.value.substring(0, event.target.value.length - 2)
        console.log(event.keyCode);
        
        
        if (lastChar === '{') {
            this.setState({
                code: event.target.value + '\n\n}',
                indent: true,
            })            
        } else {
            this.setState({
                code: event.target.value
            })
        }
    }

    handleKeydown = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
        }
    }

    runCode = () => {
        this.codeToRun = eval(this.state.code);
        this.setState({
            trigger: !this.state.trigger,
        })
    }


    render() {
        return (
            <>
            <div className="code-editor-container">
                <textarea onChange={this.handleChange} onKeyDown={this.handleKeydown} className="editor-text-input" value={this.state.code}>

                </textarea>
                <button onClick={this.runCode}>Run</button>
            </div>
            {JSON.stringify(this.state, null, 2)}
            </>
        )
    }
}

export default CodeEditor
