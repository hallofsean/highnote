import React from 'react';
import Markdown from './../../markdown/Markdown';

interface Props {
    text: string;
}

interface State {}

class Viewer extends React.Component<Props, State> {
    render() {
    return <Markdown text={this.props.text}/>;
    }
}

export default Viewer;