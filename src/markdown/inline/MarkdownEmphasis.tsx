import React from "react";
import MarkdownInline from "./MarkdownInline";

interface Props {
    text: string;
}

interface State {
}

class MarkdownEmphasis extends React.Component<Props, State> {
    render() {
        return <em>{MarkdownInline.renderInner(this.props.text)}</em>
    }
}

export default MarkdownEmphasis