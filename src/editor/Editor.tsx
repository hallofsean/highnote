import React from 'react'
import MarkdownEditor from './markdown-editor/MarkdownEditor';
import Viewer from './viewer/Viewer';
import './Editor.css'

interface Props {
}

interface State {
    text: string;
}


class Editor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = { text: '' }
    }

    handleTextChange(text: string) {
        this.setState({ text });
    }

    render() {
        return (
            <div className="Editor">
                <MarkdownEditor
                    text={this.state.text}
                    onTextChange={this.handleTextChange} />
                <Viewer text={this.state.text} />
            </div>
        );
    }
}

export default Editor;