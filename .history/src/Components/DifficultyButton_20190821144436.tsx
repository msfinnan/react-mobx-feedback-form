import React, { Component } from 'react';

//ok to use type or interface? 
type DifficultyButtonProps = {
    buttonText: string;
}

type DifficultyButtonState = {
    buttonClicked: boolean;
}

type Animal = {
    speak: () => string;
}

class Dog implements Animal {
    public speak(): string {
        return "bark";
    }
}

class Bob<Animal> {
    constructor(input: Animal) {
        this.animal = input;
    }
    private animal: Animal;
    public speak(): string {
        return this.animal.speak();
    }
}

export class DifficultyButton extends Component<DifficultyButtonProps, DifficultyButtonState> {

    constructor() {
        super();
        this.state = {
            buttonClicked: false
        }
    }
    // state: DifficultyButtonState = {
    //     buttonClicked: false
    // };

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
