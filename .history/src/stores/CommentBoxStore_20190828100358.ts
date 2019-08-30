import { observable } from "mobx";

export class CommentBoxStore {
    @observable public commentBoxText: string = "(Optional) Provide details about your experience";

    @observable public commentBoxClassName: string = "experince-details-textbox";
}