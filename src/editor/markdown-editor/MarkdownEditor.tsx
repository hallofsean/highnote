
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/gfm/gfm.js';

import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import './MarkdownEditor.css';


interface Props {
    text: string;
    onTextChange: Function;
}

interface State { }

class MarkdownEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(editor: any, data: any, value: string) {
        this.props.onTextChange(value);
    }

    render() {
        return (<CodeMirror 
            options={{
                mode: 'gfm',
                lineNumbers: true
            }}
            value={this.props.text}
            onChange={this.handleChange} />);
    }
}

export default MarkdownEditor;