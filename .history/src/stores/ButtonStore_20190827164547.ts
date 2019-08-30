import { observable, action } from "mobx";

export class ButtonStore {

    @observable 
    public emojiButtonClicked: boolean = false;

    @action 
    public onButtonClick = (): void => {
        this.emojiButtonClicked = !this.emojiButtonClicked; 
        console.log(`buttonclicked and the value is ${this.emojiButtonClicked}`)
    }

    
    
}