import * as React from 'react';

type CommentBoxProps = {
    text: string
    commentBoxClassName: string
    onChange: React.FormEvent<HTMLTextAreaElement>
}

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
                className={ this.props.commentBoxClassName } //could do something with isValidText for conditional formatting here 
                // onChange={ this.onTextInput }
                placeholder={ this.props.text }
                name="commentBoxInput"></textarea>
        );
    }
}