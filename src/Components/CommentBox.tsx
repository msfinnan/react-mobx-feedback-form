import * as React from 'react';
import { FeedbackFormStore } from '../stores/FeedbackFormStore';

interface CommentBoxProps {
    //Pass in instance of feedbackFormStore from App 
    feedbackFormStore: FeedbackFormStore;
}


export class CommentBox extends React.Component<CommentBoxProps, {}> {
    
    componentDidMount() {
        console.log("comment box componentDidMount")
        //logs when page is loaded
    }
    
    componentDidUpdate() {
        console.log("comment box componentDidUpdate")
    }
    public render() {
        return (
            <textarea
                className={FeedbackFormStore.commentBoxClassName}
                onChange={this.props.feedbackFormStore.handleUserInput}
                placeholder={FeedbackFormStore.commentBoxPlaceholderText}
                name="commentBoxInput"></textarea>
        );
    }
}