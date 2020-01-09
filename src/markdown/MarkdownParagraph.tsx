import React, { ReactNode } from 'react'

interface Props {
    lines: string[];
}

interface State {
}


class MarkdownParagraph extends React.Component<Props, State> {
    render() {
        var inner: ReactNode[] = [];
        
        this.props.lines.forEach(line => {
            inner.push(<>{line}</>);
            inner.push(<br></br>);
        });
    
        inner.pop();

        return <p>{inner}</p>;
    }
}

export default MarkdownParagraph;