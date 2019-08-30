import * as React from 'react';
import { observer } from 'mobx-react'
import { action, observable } from 'mobx';


interface DifficultyButtonProps {
    buttonText: string;
    setSelectedDifficultyButton: Function;
}

@observer
export class DifficultyButton extends React.Component<DifficultyButtonProps, {}> {
    @observable private buttonClicked: boolean;

    constructor(props: DifficultyButtonProps) {
        super(props);
        this.buttonClicked = false;
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
