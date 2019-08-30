import * as React from 'react';
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx';
import { ButtonStore } from '../stores/ButtonStore';


interface DifficultyButtonProps {
    buttonText: string;
    // buttonStore?: ButtonStore
}

// @inject("buttonStore")
@observer
export class DifficultyButton extends React.Component<DifficultyButtonProps, {}> {
    @observable private buttonClicked: boolean;

    constructor(props: DifficultyButtonProps) {
        super(props);
        this.buttonClicked = false;
    }

    @action
    private onButtonClick = (): void => {
        this.buttonClicked = !this.buttonClicked
    };
   


    public render(): JSX.Element {
        return (
            <button 
                className={this.props.buttonStore.difficultyButtonClicked ? "difficulty-button-clicked": "difficulty-button" }
                type="button"
                onClick={ this.onButtonClick}>
                { this.props.buttonText }
            </button>
        );
    }
}
