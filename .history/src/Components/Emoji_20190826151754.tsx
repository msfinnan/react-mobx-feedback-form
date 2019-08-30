import * as React from 'react';


type EmojiProps = {
    src: string;
    alt: string;
}

type EmojiState = {
    buttonClicked: boolean;
}

export class Emoji extends React.Component<EmojiProps, EmojiState> {
    
    constructor(props: EmojiProps) {
        super(props);
        this.state = {
            buttonClicked: false
        }
    }

    private onButtonClick = (): void => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    }

    public render(): JSX.Element {
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
