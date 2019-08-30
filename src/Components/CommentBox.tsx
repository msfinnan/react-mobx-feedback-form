import * as React from 'react';
import { FeedbackFormStore } from '../stores/FeedbackFormStore';

interface CommentBoxProps {
    //Pass in instance of feedbackFormStore from App 
    feedbackFormStore: FeedbackFormStore;
}

export class CommentBox extends React.Component<CommentBoxProps, {}> {

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