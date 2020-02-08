import React from 'react'
import MarkdownInline from './inline/MarkdownInline';

interface Props {
    lines: string[];
}

interface State {
}


class MarkdownParagraph extends React.Component<Props, State> {
    render() {
        let text = this.props.lines.join("\n");
        return <p><MarkdownInline text={text}></MarkdownInline></p>
    }
}

export default MarkdownParagraph;