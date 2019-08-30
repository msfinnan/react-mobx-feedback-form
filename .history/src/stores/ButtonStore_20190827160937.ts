import { observable, action } from "mobx";

export class ButtonStore {

    @observable 
    public emojiButtonClicked: boolean;

    @action 
    public onButtonClick = (): void => {
        this.emojiButtonClicked = !this.emojiButtonClicked; 
        console.log("buttonclicked")
    }

    
    
}