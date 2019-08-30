import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

interface SubmissionButtonProps {
    buttonText: string;
    buttonClass: string;
}

// type SubmissionButtonState = {
//     buttonClicked: boolean;
// }

@observer
export class SubmissionButton extends React.Component<SubmissionButtonProps, {}> {
    @observable private buttonClicked: boolean;

    constructor(props: SubmissionButtonProps) {
        super(props);
        this.buttonClicked = false;
    }

    @action
    private onButtonClick = (): void => {
        this.buttonClicked = !this.buttonClicked
    }

    public render(): JSX.Element {
        return (
            <button
                type="button"
                className={ this.buttonClicked ? this.props.buttonClass + "-clicked" : this.props.buttonClass }
                onClick={ this.onButtonClick }>
                { this.props.buttonText }
            </button>

        );
    }
}
