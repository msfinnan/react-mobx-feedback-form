import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

type CommentBoxProps = {
    text: string
    commentBoxClassName: string
    callBackFromParent: (paramenter: string | undefined) => string
    // name: string
}

// type CommentBoxState = {
//     isValidText: boolean
// }
@observer
export class CommentBox extends React.Component<CommentBoxProps, {}> {
    @observable public textAreaInputName: string;

    constructor(props: CommentBoxProps){
        super(props);
        this.textAreaInputName = "textAreaInput"

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
                placeholder={ this.props.text }
                name={this.textAreaInputName}></textarea>
        );
    }
}