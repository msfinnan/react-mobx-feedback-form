import React, { Component } from 'react';
import { observable } from 'mobx';

//ok to use type or interface? 
type DifficultyButtonProps = {
    buttonText: string;
}

// type DifficultyButtonState = {
//     buttonClicked: boolean;
// }

export class DifficultyButton extends Component<DifficultyButtonProps, {}> {
    @observable private buttonClicked: boolean;

    constructor(props: DifficultyButtonProps) {
        super(props);
        this.buttonClicked = false;
    }

    private onButtonClick = (): void => {
        // const newState: DifficultyButtonState ={ buttonClicked: !this.state.buttonClicked };
        // this.setState(newState)
        this.buttonClicked =!this.buttonClicked
    };


    public render(): JSX.Element {
        return (
            <button 
                className={this.buttonClicked ? "difficulty-button-clicked": "difficulty-button" }
                type="button"
                onClick={ this.onButtonClick }>
                { this.props.buttonText }
            </button>
        );
    }
}
