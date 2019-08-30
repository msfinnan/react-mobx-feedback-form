import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { ButtonStore } from '../stores/ButtonStore';


interface EmojiProps {
    src: string;
    alt: string;
    buttonStore?: ButtonStore
}

@inject("buttonStore")
@observer
export class Emoji extends React.Component<EmojiProps, {}> {
    @observable public emojiButtonClicked: boolean = this.props.buttonStore.emojiButtonClicked;

    constructor(props: EmojiProps) {
        super(props);

        this.emojiButtonClicked = false;
        
    }

    // @action
    // private onButtonClick = (): void => {
    //     // this.setState({ buttonClicked: !this.state.buttonClicked })
    //     this.emojiButtonClicked = !this.emojiButtonClicked;
    // }

    public render(): JSX.Element {
        return (
            <img
                src={ this.props.src }
                className={ this.emojiButtonClicked ? "emoji-border" : undefined }
                alt={ this.props.alt }
                onClick={ this.props.buttonStore.onButtonClick }>
            </img> 
        );
    }
}
