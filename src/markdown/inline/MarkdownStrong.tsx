import React from "react";
import MarkdownInline from "./MarkdownInline";
interface Props {
    text: string;
}

interface State {
}

class MarkdownStrong extends React.Component<Props, State> {
    render() {
        return <strong>{MarkdownInline.renderInner(this.props.text)}</strong>
    }
}

export default MarkdownStrong