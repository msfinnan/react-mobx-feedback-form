import { observable } from "mobx";

export class CommentBoxStore {
    @observable public text: string = "(Optional) Provide details about your experience";
}