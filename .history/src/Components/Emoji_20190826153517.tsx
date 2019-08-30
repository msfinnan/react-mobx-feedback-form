import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { observable } from 'mobx';


type EmojiProps = {
    src: string;
    alt: string;
}

// type EmojiState = {
//     buttonClicked: boolean;
// }

@observer
export class Emoji extends React.Component<EmojiProps, {}> {
    @observable private buttonClicked: boolean;
    constructor(props: EmojiProps) {
        super(props);
        this.buttonClicked = false;
        
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
