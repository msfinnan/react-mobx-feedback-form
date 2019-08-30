import * as React from 'react';
import { SubmissionButton } from './SubmissionButton';

export const SubmissionButtonCollection: React.FunctionComponent = (): JSX.Element => {
    const submissionButtons: { buttonClass: string, buttonText: string }[] = [
        {
            buttonText: "Submit",
            buttonClass: "submit-button",
        },
        {
            buttonText: "Cancel",
            buttonClass: "cancel-button",
        },
    ];

    const submissionButtonComponents = submissionButtons.map((button, i) => {
        return (
            <SubmissionButton key={i} buttonText={button.buttonText} buttonClass={button.buttonClass} />
        )
    })
    return (
        <div className="submission-buttons-row">
            { submissionButtonComponents }
        </div>
    );


};
