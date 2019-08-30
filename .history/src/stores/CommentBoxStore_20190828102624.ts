import { observable, action } from "mobx";

export class CommentBoxStore {
    @observable public commentBoxText: string = "(Optional) Provide details about your experience";

    @observable public commentBoxClassName: string = "experince-details-textbox";

    @observable public commentBoxUserInput: string = "";

    // @action public handleUserInput = (event: React.FormEvent<HTMLFormElement>): void => {
    //     this.commentBoxText = event.currentTarget.commentBoxInput;
    // }
}