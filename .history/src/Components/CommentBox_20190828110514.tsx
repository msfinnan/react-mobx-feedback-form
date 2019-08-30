import * as React from 'react';
import { CommentBoxStore } from '../stores/CommentBoxStore';
import { inject } from 'mobx-react';

interface CommentBoxProps {
    // text: string
    // commentBoxClassName: string
    // onChange: (event: React.FormEvent<HTMLFormElement>) => void
    commentBoxStore: CommentBoxStore;
}

@inject("commentBoxStore")
export class CommentBox extends React.Component<CommentBoxProps, {}> {
    public userInput: string  = "";
    

    private onTextInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const letterNumber = /^[a-zA-Z0-9',.!? ]*$/;

        if (!event.currentTarget.value.match(letterNumber)){
            alert("Symbols not allowed");
        }  
        
        this.userInput = event.currentTarget.value;
        console.log(`User input: ${this.userInput}`)
    }


    public render() {
        return (
            <textarea 
                className={ this.props.commentBoxStore.commentBoxClassName } //could do something with isValidText for conditional formatting here 
                onChange={ this.props.commentBoxStore.handleUserInput }
                placeholder={ this.props.commentBoxStore.commentBoxText }
                name="commentBoxInput"></textarea>
        );
    }
}