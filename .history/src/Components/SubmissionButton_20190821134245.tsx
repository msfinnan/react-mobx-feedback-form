import React, { Component } from 'react';

type SubmissionButtonProps = {
    buttonText: string;
    buttonClass: string;
}

type SubmissionButtonState = {
    buttonClicked: boolean;
}

export class SubmissionButton extends Component<SubmissionButtonProps, SubmissionButtonState> {
    state: SubmissionButtonState = {
        buttonClicked: false
    }

    onButtonClick = (): void => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    }

    render() {
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
