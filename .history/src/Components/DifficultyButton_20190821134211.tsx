import React, { Component } from 'react';

//ok to use type or interface? 
type DifficultyButtonProps = {
    buttonText: string;
}

type DifficultyButtonState = {
    buttonClicked: boolean;
}


export class DifficultyButton extends Component<DifficultyButtonProps, DifficultyButtonState> {

    state: DifficultyButtonState = {
        buttonClicked: false
    };

    onButtonClick = (): void => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    };


    render() {
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
