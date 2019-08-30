import { observable, action } from "mobx";

export class ButtonStore {

    @observable public difficultyButtonClicked: boolean = true;

    @action public onButtonClick = (): void => {
        this.difficultyButtonClicked = !this.difficultyButtonClicked; 
    }
    
}