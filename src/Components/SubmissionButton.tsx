import React, { Component } from 'react';

type SubmissionButtonProps = {
    buttonText: string;
    buttonClass: string;
}

type SubmissionButtonState = {
    buttonClicked: boolean;
}

export class SubmissionButton extends Component<SubmissionButtonProps, SubmissionButtonState> {
    constructor(props: SubmissionButtonProps) {
        super(props);
        this.state = {
            buttonClicked: false
        }
    }

    private onButtonClick = (): void => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    }

    public render(): JSX.Element {
        return (
            <button
                type="button"
                className={ this.state.buttonClicked ? this.props.buttonClass + "-clicked" : this.props.buttonClass }
                onClick={ this.onButtonClick }>
                { this.props.buttonText }
            </button>

        );
    }
}
