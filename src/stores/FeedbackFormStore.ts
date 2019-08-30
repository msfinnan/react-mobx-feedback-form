import { observable, action } from "mobx";
//manage state specific to this form 
//handle anything else specific to this form (text strings, validation)
export class FeedbackFormStore {
    //static shared by all instances
    //readonly can't be changed (// to const)
    public static readonly firstBodyText: string = "Overall, how satisfied were you with the most recent experience with WExp."
    public static readonly secondBodyText: string = "How easy was it to complete all the steps necessary to create, configure, launch, analyze results and teminate your experiment/CFR?"
    public static readonly thirdBodyText: string = "(Optional) We would really appreciate if you could take 1 more minute to provide additional details by answering 2 more questions."
    
    public static readonly commentBoxPlaceholderText: string = "(Optional) Provide details about your experience";
    public static readonly commentBoxClassName: string = "experince-details-textbox";
    @observable public commentBoxUserInput: string = "";
    
    @observable public emojiSelected: string;
    @observable public difficultyLevelSelected: string;

    

    private userInputValidation = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const letterNumber = /^[a-zA-Z0-9',.!? ]*$/;

        if (!event.currentTarget.value.match(letterNumber)) {
            alert("Symbols not allowed");
        }
    }

    @action
    private getUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.commentBoxUserInput = event.currentTarget.value;
        console.log("in get user input " + event.currentTarget.value)
    }

    //broke into 2 methods, userInputValidation and getUserInput. Both are called onChange in CommentBox
    @action
    public handleUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.userInputValidation(event);
        this.getUserInput(event);
    }

    @action
    public setSelectedEmoji = (dataFromEmoji: string): void => {
        console.log(`In App. Selected Emoji is ${dataFromEmoji}`)
        this.emojiSelected = dataFromEmoji;
    }

    @action
    public setSelectedDifficultyButton = (dataFromDifficultyButton: string): void => {
        console.log(`In App. Selected Difficulty Button is ${dataFromDifficultyButton}`)
        this.difficultyLevelSelected = dataFromDifficultyButton;
    }

}