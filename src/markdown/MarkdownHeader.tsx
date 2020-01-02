import React, { ReactNode } from 'react'

interface Props {
    text: string;
    level: number;
}

interface State {
}


class MarkdownHeader extends React.Component<Props, State> {
    render() {
        var node: ReactNode;
        
        if (this.props.level === 1) {
            node = <h1>{this.props.text}</h1>
        } else if (this.props.level === 2) {
            node = <h2>{this.props.text}</h2>
        } else if (this.props.level === 3) {
            node = <h3>{this.props.text}</h3>
        } else if (this.props.level === 4) {
            node = <h4>{this.props.text}</h4>
        } else if (this.props.level === 5) {
            node = <h5>{this.props.text}</h5>
        } else if (this.props.level === 6) {
            node = <h6>{this.props.text}</h6>
        }

        return node;
    }
}

export default MarkdownHeader;