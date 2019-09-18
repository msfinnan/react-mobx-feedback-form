import * as React from "react";
import { observable } from "mobx";
import { UserNumPosts } from "../stores/FeedbackFormStore";

interface UserFeedbackProps {
    emoji: string
    satisfaction: string
    comments: string
    apiData: UserNumPosts[]
    // feedbackFormStore: FeedbackFormStore;
}


export class UserFeedback extends React.Component<UserFeedbackProps, {}>{


    // private timerID;
    // @observable date: Date = new Date()

    // private tick() {
    //     this.setState({
    //       date: new Date()
    //     });
    //   }

    // public componentDidMount(){
    //     console.log("in componentDidMount")
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //       );

    // }
    // public getSnapshotBeforeUpdate(prevProps: UserFeedbackProps, prevState: {}) {
    //     console.log("in getSnapShotBeforeUpdate prev props is ", prevProps, "prev state is ", prevState)
    //     return null;
    // }
    //noticed that you have to click submit twice for this to work now
    //when I comment out shouldComponentUpdate, it updates twice in the log, but only have to click submit once 
    public shouldComponentUpdate(nextProps: UserFeedbackProps, nextState: {}): boolean {
        console.log("in shouldComponentUpdate")
        if (nextProps.apiData == null) {
            return false;
        } else {
            return true;
        }
    }
    
    //added componentDidUpdate with console.log to test shouldComponentUpdate. 
    //if shouldComponentUpdate always returns true, "component did update logs twice"
    //with the null check it only prints once, when this.props.apiData != null
    // public componentDidUpdate() {
    //     console.log("in componentDidUpdate this.props.apiData is ", this.props.apiData)
    // }

    // public componentWillUnmount() {
    //     alert("unmounting")
    //     clearInterval(this.timerID);
    // }

    @observable private newArray: JSX.Element[];

    private showApiData = (): JSX.Element | JSX.Element[] => {
        if (this.props.apiData == null) {
            return <li>No API Data</li>
        } else {
            this.newArray = this.props.apiData.map((user, i) => {
                return <li key={i}>{`${user.username} posted ${user.numPosts} posts`}</li>
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