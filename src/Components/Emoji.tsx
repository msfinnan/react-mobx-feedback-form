import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';


interface EmojiProps {
    src: string;
    alt: string;
    setSelectedEmoji: (dataFromEmoji: string) => void;
}

@observer
export class Emoji extends React.Component<EmojiProps, {}> {
    @observable private buttonClicked: boolean;

    constructor(props: EmojiProps) {
        super(props);
        this.buttonClicked = false;
    }

    componentDidMount() {
        console.log(`emoji componentDidMount and the value of buttonClicked is ${this.buttonClicked}`)
        //logs when page is loaded
    }

    componentDidUpdate() {
        console.log(`emoji componentDidUpdate and the value of buttonClicked is ${this.buttonClicked}`)
    }

    @action
    private onButtonClick = (): void => {
        this.buttonClicked = !this.buttonClicked;
        this.props.setSelectedEmoji(this.props.src);
    }

    public render(): JSX.Element {
        return (
            <img
                src={this.props.src}
                className={this.buttonClicked ? "emoji-border" : null}
                alt={this.props.alt}
                onClick={this.onButtonClick}>
            </img>
        );
    }
}
