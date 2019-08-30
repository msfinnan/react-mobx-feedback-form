import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

type SubmissionButtonProps = {
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
        // this.state = {
        //     buttonClicked: false
        // }
    }

    private onButtonClick = (): void => {
        // this.setState({ buttonClicked: !this.state.buttonClicked })
        this.buttonClicked = !this.buttonClicked
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
