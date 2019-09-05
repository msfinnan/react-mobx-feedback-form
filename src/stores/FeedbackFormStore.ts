import { observable, action } from "mobx";
//manage state specific to this form 
//handle anything else specific to this form (text strings, validation)

interface UserJson {
    id: number;
    name: string;
};

interface PostJson {
    length: number;

}
export class FeedbackFormStore {

    private onUserPostFetchFulfilled = (response: Response): Promise<PostJson> => {
        if (response.ok) {
            return response.json();
        } else {
            console.error(new Error(response.status.toString()))
        }
    }

    private onUserPostFetchRejected = (reason: any): void => {
        console.error(new Error(reason))
    }

    private onFetchFulfilled = (response: Response): void => {
        if (response.ok) {
            const jsonPromise: Promise<UserJson[]> = response.json();
            // jsonPromise.then((json: any): any => {
            //     json.forEach(user => {
            //         const userPosts: Promise<Response> = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            //         const posts: Promise<void | Response> = userPosts.then(this.onUserPostFetchFulfilled)
            //             .catch(this.onUserPostFetchRejected);
            //         posts.then((postJson: any): any => {
            //             console.log(`User ${user.name} has ${postJson.length} posts`);
            //         });
            //     });
            // })
            jsonPromise.then((json: UserJson[]): any => {
        
                const postPromises: Promise<Response>[] = json.map((user: UserJson) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`))
                const userNames: string[] = json.map((user: UserJson) => user.name);
                const singlePromiseForPosts: Promise<Response[]> = Promise.all(postPromises);
                singlePromiseForPosts.then((responseArray: Response[]): any => {
                    const jsonArray: Promise<PostJson>[] = responseArray.map((post: Response): Promise<PostJson> => {
                        return this.onUserPostFetchFulfilled(post);
                    });
                    const singlePromise: Promise<PostJson[]> = Promise.all(jsonArray);
                    singlePromise.then((postJson: PostJson[]): void => {
                        let counter: number = 0;
                        postJson.forEach(post => {
                            console.log(`${userNames[counter]} posted ${post.length} comments`);
                            counter ++
                        });
                    })
                })
                    .catch(this.onUserPostFetchRejected)


                // const posts: Promise<void | Response> = userPosts.then(this.onUserPostFetchFulfilled)
                //     .catch(this.onUserPostFetchRejected);
                // posts.then((postJson: any): any => {
                //     console.log(`User ${user.name} has ${postJson.length} posts`);
                // });
            })
            console.log("hi2");
        } else {
            console.error(new Error(response.status.toString()));
        }
    }

    private onFetchRejected = (reason: any): void => {
        console.error(new Error(reason));
    }

    constructor() {
        const fetchResultPromise: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/users');
        // const processedResultPromise: Promise<void>  = fetchResultPromise.then(this.onFetchFulfilled, this.onFetchRejected); //resolve promise 
        fetchResultPromise.then(this.onFetchFulfilled, this.onFetchRejected);

        console.log("hi");

    }


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
        // console.log("in get user input " + event.currentTarget.value)
    }

    //broke into 2 methods, userInputValidation and getUserInput. Both are called onChange in CommentBox
    @action
    public handleUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.userInputValidation(event);
        this.getUserInput(event);
    }

    @action
    public setSelectedEmoji = (dataFromEmoji: string): void => {
        // console.log(`In App. Selected Emoji is ${dataFromEmoji}`)
        this.emojiSelected = dataFromEmoji;
    }

    @action
    public setSelectedDifficultyButton = (dataFromDifficultyButton: string): void => {
        // console.log(`In App. Selected Difficulty Button is ${dataFromDifficultyButton}`)
        this.difficultyLevelSelected = dataFromDifficultyButton;
    }

}