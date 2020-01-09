import React, { ReactNode } from 'react'
import MarkdownParagraph from './MarkdownParagraph';

interface Props {
    lines: string[];
}

interface State {
}


class MarkdownQuote extends React.Component<Props, State> {
    render() {
        var inner: ReactNode[] = [];
        var buffer: string[] = [];
        
        this.props.lines.forEach(line => {
            line = line.substr(1).trim();
            if (line.length === 0) {
                inner.push(<MarkdownParagraph lines={buffer}/>);
                buffer = [];
            } else {
                buffer.push(line);
            }
        });
        if (buffer.length > 0) {
            inner.push(<MarkdownParagraph lines={buffer}/>);
        }

        return <blockquote>{inner}</blockquote>;
    }
}

export default MarkdownQuote;