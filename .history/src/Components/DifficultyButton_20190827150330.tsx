import * as React from 'react';
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx';
import { ButtonStore } from '../stores/ButtonStore';


interface DifficultyButtonProps {
    buttonText: string;
    buttonStore?: ButtonStore
}

@inject("buttonStore")
@observer
export class DifficultyButton extends React.Component<DifficultyButtonProps, {}> {
    // @observable private buttonClicked: boolean;

    constructor(props: DifficultyButtonProps) {
        super(props);
        this.props.buttonStore.difficultyButtonClicked = true;
    }

    // @action
    // private onButtonClick = (): void => {
    //     this.buttonClicked = !this.buttonClicked;
    // };
   


    public render(): JSX.Element {
        return (
            <button 
                className={this.props.buttonStore.difficultyButtonClicked ? "difficulty-button-clicked": "difficulty-button" }
                type="button"
                onClick={ this.props.buttonStore.onButtonClick }>
                { this.props.buttonText }
            </button>
        );
    }
}
