import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';


interface EmojiProps {
    src: string;
    alt: string;
}

@observer
export class Emoji extends React.Component<EmojiProps, {}> {
    @observable private buttonClicked: boolean;

    constructor(props: EmojiProps) {
        super(props);
        this.buttonClicked = false;
        
    }

    @action
    private onButtonClick = (): void => {
        this.buttonClicked = !this.buttonClicked;
        console.log(`src of emoji is ${this.props.src}`);
    }

    public render(): JSX.Element {
        return (
            <img
                src={ this.props.src }
                className={ this.buttonClicked ? "emoji-border" : null }
                alt={ this.props.alt }
                onClick={ this.onButtonClick }>
            </img> 
        );
    }
}