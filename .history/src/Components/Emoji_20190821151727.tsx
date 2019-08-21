import React, { Component } from 'react';


type EmojiProps = {
    src: string;
    alt: string;
}

type EmojiState = {
    buttonClicked: boolean;
}

export class Emoji extends Component<EmojiProps, EmojiState> {
    
    constructor(props: EmojiProps) {
        super(props);
        this.state = {
            buttonClicked: false
        }
    }

    onButtonClick = (): void => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    }

    render() {
        return (
            <img
                src={ this.props.src }
                className={ this.state.buttonClicked ? "emoji-border" : undefined }
                alt={ this.props.alt }
                onClick={ this.onButtonClick }>
            </img> 
        );
    }
}
