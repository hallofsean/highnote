import React, { ReactNode } from "react";
import MarkdownText from "./MarkdownText";
import MarkdownStrong from "./MarkdownStrong";
import MarkdownEmphasis from "./MarkdownEmphasis";

const STRONG1 = /\*\*(\S.*?\S|\S)\*\*/s
const EMPHASIS1 = /\*([^\s*].*?[^\s*]|[^\s*])\*/s

interface Props {
    text: string;
}

interface State {
}

enum Features {
    TEXT,
    STRONG,
    EMPHASIS,
}

class MarkdownInline extends React.Component<Props, State> {
    static renderInner(text: string): ReactNode {
        console.log(text)
        let strong1 = STRONG1.exec(text);
        let emphasis1 = EMPHASIS1.exec(text);

        let type = Features.TEXT;
        let start = text.length;
        let groupText = "";
        let match = "";

        if (strong1 != null) {
            if (strong1.index < start) {
                start = strong1.index;
                match = strong1[0];
                groupText = strong1[1];
                type = Features.STRONG
            }
        }

        if (emphasis1 != null) {
            if (emphasis1.index < start) {
                start = emphasis1.index;
                match = emphasis1![0];
                groupText = emphasis1[1];
                type = Features.EMPHASIS
            }
        }

        if (type === Features.TEXT) {
            return <MarkdownText text={text}></MarkdownText>;
        } else {
            let startText = text.substring(0, start);
            let endText = text.substring(start + match.length);
            if (type === Features.STRONG) {
                return <>
                        <MarkdownText text={startText}></MarkdownText>
                        <MarkdownStrong text={groupText}></MarkdownStrong>
                        <MarkdownInline text={endText}></MarkdownInline>
                    </>
            }
            else if (type === Features.EMPHASIS) {
                return <>
                        <MarkdownText text={startText}></MarkdownText>
                        <MarkdownEmphasis text={groupText}></MarkdownEmphasis>
                        <MarkdownInline text={endText}></MarkdownInline>
                    </>
            }
        }
    }

    render() {
        return MarkdownInline.renderInner(this.props.text)
    }
}

export default MarkdownInline