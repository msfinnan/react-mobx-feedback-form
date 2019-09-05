import * as React from 'react';
import { observer } from 'mobx-react'
import { action, observable } from 'mobx';


interface DifficultyButtonProps {
    buttonText: string;
    setSelectedDifficultyButton: (dataFromDifficultyButton: string) => void;
}

@observer
export class DifficultyButton extends React.Component<DifficultyButtonProps, {}> {
    @observable private buttonClicked: boolean;

    constructor(props: DifficultyButtonProps) {
        super(props);
        this.buttonClicked = false;
    }

    componentDidMount() {
        console.log(`difficulty button componentDidMount and the value of buttonClicked is ${this.buttonClicked}`)
        //logs when page is loaded
    }

    componentDidUpdate() {
        console.log(`difficulty button componentDidUpdate and the value of buttonClicked is ${this.buttonClicked}`)
    }

    @action
    private onButtonClick = (): void => {
        this.buttonClicked = !this.buttonClicked;
        this.props.setSelectedDifficultyButton(this.props.buttonText);
    };

    public render(): JSX.Element {
        return (
            <button
                className={this.buttonClicked ? "difficulty-button-clicked" : "difficulty-button"}
                type="button"
                onClick={this.onButtonClick}>
                {this.props.buttonText}
            </button>
        );
    }
}
