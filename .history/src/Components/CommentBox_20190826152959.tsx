import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';

type CommentBoxProps = {
    text: string
    commentBoxClassName: string
}

// type CommentBoxState = {
//     isValidText: boolean
// }
@observer
export class CommentBox extends React.Component<CommentBoxProps, {}> {
    @observable private isValidText: boolean

    constructor(props: CommentBoxProps){
        super(props)
        this.isValidText = false; 
    }


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