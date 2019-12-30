import React from 'react';
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

    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        if (e.target == null) {
            return;
        }
        this.props.onTextChange(e.target.value);
    }

    render() {
        return <textarea value={this.props.text} onChange={this.handleChange} />;
    }
}

export default MarkdownEditor;