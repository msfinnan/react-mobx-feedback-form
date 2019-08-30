import { observable } from "mobx";

export class BodyTextStore {

    @observable public firstText: string = "Overall, how satisfied were you with the most recent experience with WExp.";

    @observable public secondText: string = "How easy was it to complete all the steps necessary to create, configure, launch, analyze results and teminate your experiment/CFR?";

    @observable public thirdText: string ="(Optional) We would really appreciate if you could take 1 more minute to provide additional details by answering 2 more questions.";
}