import React, { ReactNode } from 'react';
import MarkdownHeader from './MarkdownHeader';
import MarkdownParagraph from './MarkdownParagraph';

const HEADER1 = '# ';
const HEADER2 = '## ';
const HEADER3 = '### ';
const HEADER4 = '#### ';
const HEADER5 = '##### ';
const HEADER6 = '###### ';


interface Props {
    text: String;
}

interface State {
}


class Markdown extends React.Component<Props, State> {
    private split_artifact(): ReactNode {
        var lines = this.props.text.split('\n');
        var buffer: string[] = [];
        var artifacts: ReactNode[] = [];
        lines.forEach((line) => {
            line = line.trim();
            var artifact = null;
            if (line.startsWith(HEADER1)) {
                artifact = <MarkdownHeader text={line.substring(HEADER1.length)} level={1} />;
            } else if (line.startsWith(HEADER2)) {
                artifact = <MarkdownHeader text={line.substring(HEADER2.length)} level={2} />;
            } else if (line.startsWith(HEADER3)) {
                artifact = <MarkdownHeader text={line.substring(HEADER3.length)} level={3} />;
            } else if (line.startsWith(HEADER4)) {
                artifact = <MarkdownHeader text={line.substring(HEADER4.length)} level={4} />;
            } else if (line.startsWith(HEADER5)) {
                artifact = <MarkdownHeader text={line.substring(HEADER5.length)} level={5} />;
            } else if (line.startsWith(HEADER6)) {
                artifact = <MarkdownHeader text={line.substring(HEADER6.length)} level={6} />;
            } else if (line.length === 0) {
                artifact = <></>;
            }

            if (artifact != null) {
                if (buffer.length > 0) {
                    artifacts.push(<MarkdownParagraph lines={buffer} />)
                    buffer = [];
                }

                artifacts.push(artifact);
            } else {
                buffer.push(line);
            }
        })

        if (buffer.length > 0) {
            artifacts.push(<MarkdownParagraph lines={buffer} />)
            buffer = [];
        }

        return <>{artifacts}</>
    }

    render() {
        return (
            <div className="Markdown">
                {this.split_artifact()}
            </div>
        );
    }
}

export default Markdown;