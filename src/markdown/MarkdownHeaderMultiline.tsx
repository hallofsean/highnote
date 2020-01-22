import React, { ReactNode } from 'react'
import MarkdownHeader from './MarkdownHeader';

interface Props {
    lines: string[];
    level: number;
}

interface State {
}


class MarkdownHeaderMultiline extends React.Component<Props, State> {
    render() {
        var node: ReactNode;
        var inner: ReactNode[] = [];

        this.props.lines.forEach(line => {
            inner.push(<>{line}</>);
            inner.push(<br/>);
        });
        inner.pop();

        if (this.props.level === 1) {
            node = <h1>{inner}</h1>
        } else if (this.props.level === 2) {
            node = <h2>{inner}</h2>
        } else if (this.props.level === 3) {
            node = <h3>{inner}</h3>
        } else if (this.props.level === 4) {
            node = <h4>{inner}</h4>
        } else if (this.props.level === 5) {
            node = <h5>{inner}</h5>
        } else if (this.props.level === 6) {
            node = <h6>{inner}</h6>
        }

        return node;
    }
}

export default MarkdownHeaderMultiline;