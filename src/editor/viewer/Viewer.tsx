import React from 'react';

interface Props {
    text: string;
}

interface State {}

class Viewer extends React.Component<Props, State> {
    render() {
    return <p>{this.props.text}</p>;
    }
}

export default Viewer;