import React, { ReactNode } from 'react';
import MarkdownHeader from './MarkdownHeader';
import MarkdownParagraph from './MarkdownParagraph';
import 'github-markdown-css'
import MarkdownQuote from './MarkdownQuote';
import MarkdownHeaderMultiline from './MarkdownHeaderMultiline';

const HEADER1 = /^ {0,3}#(?: (.*?)#* *$|$)/;
const HEADER2 = /^ {0,3}#{2}(?: (.*?)#* *$|$)/;
const HEADER3 = /^ {0,3}#{3}(?: (.*?)#* *$|$)/;
const HEADER4 = /^ {0,3}#{4}(?: (.*?)#* *$|$)/;
const HEADER5 = /^ {0,3}#{5}(?: (.*?)#* *$|$)/;
const HEADER6 = /^ {0,3}#{6}(?: (.*?)#* *$|$)/;
const HEADER1_UNDERLINE = /^ {0,3}=+ *$/;
const HEADER2_UNDERLINE = /^ {0,3}-+ *$/;
const QUOTE = /^>/

enum TextMode {
    TEXT,
    QUOTE
}

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
        var mode = TextMode.TEXT;
        lines.forEach((line) => {
            line = line.trim();
            var artifact = null;

            if (QUOTE.test(line)) {
                if (mode !== TextMode.QUOTE) {
                    artifacts.push(this.process_buffer(buffer, mode));
                    buffer = [];
                    mode = TextMode.QUOTE;
                }
            } else {
                let text: string;
                if (mode !== TextMode.TEXT) {
                    artifacts.push(this.process_buffer(buffer, mode));
                    buffer = [];
                    mode = TextMode.TEXT;
                }
                
                if (HEADER1.test(line)) {
                    const groups = line.match(HEADER1);
                    text = '';
                    if (groups!.length > 1) {
                        text = groups![1];
                    }
                    artifact = <MarkdownHeader text={text} level={1} />;
                } else if (HEADER2.test(line)) {
                    const groups = line.match(HEADER2);
                    text = '';
                    if (groups!.length > 1) {
                        text = groups![1];
                    }
                    artifact = <MarkdownHeader text={text} level={2} />;
                } else if (HEADER3.test(line)) {
                    const groups = line.match(HEADER3);
                    text = '';
                    if (groups!.length > 1) {
                        text = groups![1];
                    }
                    artifact = <MarkdownHeader text={text} level={3} />;
                } else if (HEADER4.test(line)) {
                    const groups = line.match(HEADER4);
                    text = '';
                    if (groups!.length > 1) {
                        text = groups![1];
                    }
                    artifact = <MarkdownHeader text={text} level={4} />;
                } else if (HEADER5.test(line)) {
                    const groups = line.match(HEADER5);
                    text = '';
                    if (groups!.length > 1) {
                        text = groups![1];
                    }
                    artifact = <MarkdownHeader text={text} level={5} />;
                } else if (HEADER6.test(line)) {
                    const groups = line.match(HEADER6);
                    text = '';
                    if (groups!.length > 1) {
                        text = groups![1];
                    }
                    artifact = <MarkdownHeader text={text} level={6} />;
                } else if (line.length === 0) {
                    artifact = <></>;
                }
            }

            if (artifact != null) {
                artifacts.push(this.process_buffer(buffer, mode))
                buffer = [];
                artifacts.push(artifact);
                mode = TextMode.TEXT;
            } else {
                if (HEADER1_UNDERLINE.test(line)) {
                    if (buffer.length > 0) {
                        artifacts.push(<MarkdownHeaderMultiline lines={buffer} level={1} />)
                        buffer = [];
                    }
                } else if (HEADER2_UNDERLINE.test(line)) {
                    if (buffer.length > 0) {
                        artifacts.push(<MarkdownHeaderMultiline lines={buffer} level={2} />)
                        buffer = [];
                    }
                } else {
                    buffer.push(line);
                }
            }
        })

        if (buffer.length > 0) {
            artifacts.push(this.process_buffer(buffer, mode));
            buffer = [];
        }

        return <>{artifacts}</>
    }

    private process_buffer(buffer: string[], mode: TextMode): ReactNode {
        var node = <></>
        if (buffer.length > 0) {
            if (mode === TextMode.TEXT) {
                node = <MarkdownParagraph lines={buffer} />
            } else if (mode === TextMode.QUOTE) {
                node = <MarkdownQuote lines={buffer} />
            }
        }
        return node;
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