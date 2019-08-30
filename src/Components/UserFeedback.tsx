import * as React from "react";

interface UserFeedbackProps {
    emoji: string
    satisfaction: string
    comments: string
}

export class UserFeedback extends React.Component<UserFeedbackProps, {}>{
    public render() {
        return (
            <div>
                <p><strong>User Feedback</strong></p>
                <ul>
                    <li><strong>Overall Satisfaction:</strong> {this.props.emoji}</li>
                    <li><strong>Ease of use:</strong> {this.props.satisfaction}</li>
                    <li><strong>User Comments: </strong>{this.props.comments}</li>
                </ul>
            </div>
        );
    }
}