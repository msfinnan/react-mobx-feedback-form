import * as React from 'react';
import { DifficultyButton } from './DifficultyButton';

interface DifficultyButtonCollectionProps {
    setSelectedDifficultyButton: Function;
}
export class DifficultyButtonCollection extends React.Component<DifficultyButtonCollectionProps, {}>{

    private difficultyButtons: { buttonText: string }[] = [
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

    private difficultyButtonComponents = this.difficultyButtons.map((button, i) => {
        return (
            <DifficultyButton 
                key={i} buttonText={button.buttonText} 
                setSelectedDifficultyButton={this.props.setSelectedDifficultyButton} 
            />
        )
    })

    public render() {
        return (
            <div className="buttons-row">
                {this.difficultyButtonComponents}
            </div>
        );
    }

};