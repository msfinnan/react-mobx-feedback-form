import React, { Component } from 'react';

//ok to use type or interface? 
type DifficultyButtonProps = {
    buttonText: string;
}

type DifficultyButtonState = {
    buttonClicked: boolean;
}

export class DifficultyButton extends Component<DifficultyButtonProps, DifficultyButtonState> {

    constructor(props: DifficultyButtonProps) {
        super(props);
        this.state = {
            buttonClicked: false
        }
    }
    // state: DifficultyButtonState = {
    //     buttonClicked: false
    // };

    private onButtonClick = (): void => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    };


    public render() {
        return (
            <button 
                className={this.state.buttonClicked ? "difficulty-button-clicked": "difficulty-button" }
                type="button"
                onClick={ this.onButtonClick }>
                { this.props.buttonText }
            </button>
        );
    }
}
