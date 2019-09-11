import * as React from "react";
import { observable } from "mobx";
import { UserLength } from "../stores/FeedbackFormStore";
// import {UserLength} from 

// interface UserLength {
//     username: string;
//     length: number
// }

interface UserFeedbackProps {
    emoji: string
    satisfaction: string
    comments: string
    apiData: UserLength[]
    // feedbackFormStore: FeedbackFormStore;
}


export class UserFeedback extends React.Component<UserFeedbackProps, {}>{
    @observable private newArray: JSX.Element[];

    //noticed that you have to click submit twice for this to work now
    //when I comment out shouldComponentUpdate, it updates twice in the log, but only have to click submit once 
    public shouldComponentUpdate(nextProps: UserFeedbackProps, nextState: {}): boolean {
        if (this.props.apiData == null) {
            return false;
        } else {
            return true;
        }
    }

    //added componentDidUpdate with console.log to test shouldComponentUpdate. 
    //if shouldComponentUpdate always returns true, "component did update logs twice"
    //with the null check it only prints once, when this.props.apiData != null
    componentDidUpdate() {
        console.log("this.props.apiData is ", this.props.apiData, "component did update")
    }

    private showApiData = (): JSX.Element | JSX.Element[] => {
        if (this.props.apiData == null) {
            return <li>No API Data</li>
        } else {
            this.newArray = this.props.apiData.map((user, i) => {
                return <li key={i}>{`${user.username} posted ${user.length} posts`}</li>
            })
            return <ul>{this.newArray}</ul>;
        }
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
                <p><strong>API Data:</strong></p>
                {this.showApiData()}
            </div>
        );
    }
}