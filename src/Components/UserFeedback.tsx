import * as React from "react";

interface UserFeedbackProps {
    emoji: string
    satisfaction: string
    comments: string
}



export class UserFeedback extends React.Component<UserFeedbackProps, {}>{


    componentDidMount() {
        console.log("user feedback componentDidMount")
        //logs when page is loaded
    }

    componentDidUpdate() {
        console.log("user feedback componentDidUpdate")
    }

    public render() {
        return (
            <div className="user-feedback">
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