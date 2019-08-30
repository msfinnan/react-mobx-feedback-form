import React, { Component } from 'react';

type CommentBoxProps = {
    text: string
    commentBoxClassName: string
}

type CommentBoxState = {
    isValidText: boolean
}

export class CommentBox extends Component<CommentBoxProps, CommentBoxState> {
    state: CommentBoxState = {
        isValidText: true
    };


    onTextInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const letterNumber = /^[a-zA-Z0-9',.!? ]*$/;

        if (!event.currentTarget.value.match(letterNumber)){
            alert("Symbols not allowed");
            // this.setState({ isValidText: false })
        }     
    }

    render() {
        return (
            <textarea 
                className={ this.props.commentBoxClassName } //could do something with isValidText for conditional formatting here 
                onChange={ this.onTextInput }
                placeholder={ this.props.text }></textarea>
        );
    }
}