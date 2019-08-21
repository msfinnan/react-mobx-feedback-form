import React from 'react';
import { DifficultyButton } from './DifficultyButton';

export const DifficultyButtonCollection: React.FunctionComponent = (): JSX.Element => {
    const difficultyButtons: { buttonText: string }[] = [
        {
            buttonText: "Very Difficult"
        },
        {
            buttonText: "Difficult"
        },
        {
            buttonText: "Neither"
        },
        {
            buttonText: "Easy"
        },
        {
            buttonText: "Very Easy"
        },
    ];

    const difficultyButtonComponents = difficultyButtons.map((button, i) => {
        return (
            <DifficultyButton key={i} buttonText={button.buttonText} />
        )
    })
    return (
        <div className="buttons-row">
            { difficultyButtonComponents }
        </div>
    );


};