import React, { ReactNode } from "react";

interface Props {
    text: string;
}

interface State {
}

class MarkdownText extends React.Component<Props, State> {
    render() {
        let lines = this.props.text.split("\n");
        let inner: ReactNode[] = [];

        lines.forEach(line => {
            inner.push(<>{line}</>);
            inner.push(<br></br>);
        });
        
        if (inner.length > 0) {
            inner.pop();
        }

        return <>{inner}</>
    }
}

export default MarkdownText;