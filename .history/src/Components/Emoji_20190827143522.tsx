import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';


type EmojiProps = {
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
        // this.setState({ buttonClicked: !this.state.buttonClicked })
        this.buttonClicked = !this.buttonClicked;
    }

    public render(): JSX.Element {
        return (
            <img
                src={ this.props.src }
                className={ this.buttonClicked ? "emoji-border" : undefined }
                alt={ this.props.alt }
                onClick={ this.onButtonClick }>
            </img> 
        );
    }
}
