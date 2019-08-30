import { observable, action } from "mobx";

export class CommentBoxStore {
    @observable public commentBoxText: string = "(Optional) Provide details about your experience";

    @observable public commentBoxClassName: string = "experince-details-textbox";

    @observable public commentBoxUserInput: string = "";

    @action public handleUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>): string => {
        const letterNumber = /^[a-zA-Z0-9',.!? ]*$/;

        if (!event.currentTarget.value.match(letterNumber)){
            alert("Symbols not allowed");
        }  
        console.log(`user input in store is: ${this.commentBoxText}`)

        this.commentBoxUserInput = event.currentTarget.value;
    }
}