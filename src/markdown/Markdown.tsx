import React, { ReactNode } from 'react';
import MarkdownHeader from './MarkdownHeader';
import MarkdownParagraph from './MarkdownParagraph';
import 'github-markdown-css'

const HEADER1 = /^# /;
const HEADER2 = /^## /;
const HEADER3 = /^### /;
const HEADER4 = /^#### /;
const HEADER5 = /^##### /;
const HEADER6 = /^###### /;

const HEADER1_UNDERLINE = /^==+$/;
const HEADER2_UNDERLINE = /^--+$/;

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
            line = line.trimLeft();
            var artifact = null;
            if (HEADER1.test(line)) {
                artifact = <MarkdownHeader text={line.substring(2)} level={1} />;
            } else if (HEADER2.test(line)) {
                artifact = <MarkdownHeader text={line.substring(3)} level={2} />;
            } else if (HEADER3.test(line)) {
                artifact = <MarkdownHeader text={line.substring(4)} level={3} />;
            } else if (HEADER4.test(line)) {
                artifact = <MarkdownHeader text={line.substring(5)} level={4} />;
            } else if (HEADER5.test(line)) {
                artifact = <MarkdownHeader text={line.substring(6)} level={5} />;
            } else if (HEADER6.test(line)) {
                artifact = <MarkdownHeader text={line.substring(7)} level={6} />;
            } else if (line.length === 0) {
                artifact = <></>;
            }
            line = line.trimRight();

            if (artifact != null) {
                if (buffer.length > 0) {
                    artifacts.push(<MarkdownParagraph lines={buffer} />)
                    buffer = [];
                }

                artifacts.push(artifact);
            } else {
                if (HEADER1_UNDERLINE.test(line)) {
                    if (buffer.length > 0) {
                        var last = buffer.pop();
                        artifacts.push(<MarkdownHeader text={last!} level={1} />)
                    }
                } else if (HEADER2_UNDERLINE.test(line)) {
                    if (buffer.length > 0) {
                        var last = buffer.pop();
                        artifacts.push(<MarkdownHeader text={last!} level={2} />)
                    }
                } else {
                    buffer.push(line);
                }
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
            <div className="markdown-body">
                {this.split_artifact()}
            </div>
        );
    }
}

export default Markdown;