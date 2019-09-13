import { observable, action, runInAction } from "mobx";
import { FeedbackFormDataService, UserJson, PostJson } from "../DataServices/FeedbackFormDataService";
//manage state specific to this form 
//handle anything else specific to this form (text strings, validation)

export interface UserNumPosts {
    username: string;
    numPosts: number 
}

export class FeedbackFormStore {

    private feedbackFormDataService = new FeedbackFormDataService();

    @observable public apiDisplayData: UserNumPosts[];

    @action
    public async init3(): Promise<void> {

        const userData: UserJson[] = await this.feedbackFormDataService.getUserAsync();

        const singleUserPosts: Promise<PostJson>[] = userData.map((user: UserJson): Promise<PostJson> => {
            const postData: Promise<PostJson> = this.feedbackFormDataService.getPostsAsync(user.id)
            return postData;
        });
        const singlePromise: Promise<PostJson[]> = Promise.all(singleUserPosts)
        const postJson: PostJson[] = await singlePromise;

        const apiData: UserNumPosts[] = postJson.map((post) => {
            const singleUserData: UserJson = userData.find(user => post[0].userId === user.id); //user is one element in the array, iterates through array of UserJson objects and returns first objec where user id matches post user id 
            const username: string = singleUserData.name;
            return {username: username, numPosts: post.numPosts} 
        });
        runInAction(() => {
            this.apiDisplayData = apiData;
        })
        console.log(apiData);
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


    /* without await/async 
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
    
        private onUserFetchFulfilled = (response: Response): void => {
            if (response.ok) {
                const jsonPromise: Promise<UserJson[]> = response.json();
    
    
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
                })
    
            } else {
                console.error(new Error(response.status.toString()));
            }
        }
    
        private onUserFetchRejected = (reason: any): void => {
            console.error(new Error(reason));
        }
        */

    // private showError = (e: any) => {
    //     console.warn(new Error(e));
    // }

    // private a() {
    //     return 1;
    // }

    // private b = () => {
    //     return 1;
    // }
    // private c = 3;

    // private getStatusTextUsingPromises(): Promise<string> {
    //     const responseAsPromise: Promise<Response> = fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const statusText: Promise<string> = responseAsPromise.then((response: Response): string => {
    //         const statusTextInner: string = response.statusText;
    //         return statusTextInner;
    //     });
    //     return statusText;
    // }


    // private async getStatusTextUsingAsync(): Promise<string> {
    //     const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    //     return response.statusText
    // }

    // private getUserAsync = async (): Promise<UserJson[]> => {
    //     /*
    //     const responseAsPromise: Promise<Response> = fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const response: Response = await responseAsPromise;
    //     */

    //     const dataFromThen: Promise<UserJson[]> = fetch(`https://jsonplaceholder.typicode.com/users`).then((response: Response): Promise<UserJson[]> => {
    //         return (response.json() as Promise<UserJson[]>);
    //     });

    //     const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const data: UserJson[] = await (response.json() as Promise<UserJson[]>);
    //     return data
    // }

    // // version 1
    // private getPostsAsync = async (userId: number): Promise<PostJson> => {
    //     const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    //     const data: PostJson = await response.json();
    //     return data
    // }

    // private async init(): Promise<void> {
    //     let userData: UserJson[] = await this.getUserAsync()

    //     let allUsers: Promise<PostJson>[] = userData.map((user: UserJson): Promise<PostJson> => {
    //         const postData: Promise<PostJson> = this.getPostsAsync(user.id)
    //         return postData
    //     });
    //     const userNames: string[] = userData.map((user: UserJson) => user.name); //get usernames to console log 
    //     const singlePromise: Promise<PostJson[]> = Promise.all(allUsers)
    //     let postJson: PostJson[] = await singlePromise;


    //     postJson.forEach((post, index) => {
    //         console.log(`${userNames[index]} posted ${post.length} comments`);

    //     });
    // }

    // //version 2
    // private getPostsAsync2 = async (userId: number, userName: string): Promise<{}> => {
    //     const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    //     const data: PostJson = await response.json();
    //     const returnObject = {data: data, username: userName}
    //     return returnObject
    // }

    // private async init2(): Promise<void> {
    //     let userData: UserJson[] = await this.getUserAsync()

    //     let allUsers: Promise<{}>[] = userData.map((user: UserJson): Promise<{}> => {
    //         const postData: Promise<{}> = this.getPostsAsync2(user.id, user.name)
    //         return postData
    //     });
    //     const singlePromise: Promise<Array<{}>> = Promise.all(allUsers)
    //     let postJson: {}[] = await singlePromise;


    //     postJson.forEach((object, index) => {
    //         console.log(`${object.username} posted ${object.data.length} comments`);

    //     });
    // }

    // version 3
    // private getPostsAsync3 = async (userId: number): Promise<PostJson> => {
    //     const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    //     const data: PostJson = await response.json();
    //     return data
    // }




    // private async init3(): Promise<void> {
    //     let userData: UserJson[] = await this.getUserAsync()

    //     let allUsers: Promise<PostJson>[] = userData.map((user: UserJson): Promise<PostJson> => {
    //         const postData: Promise<PostJson> = this.getPostsAsync3(user.id)
    //         return postData
    //     });
    //     const singlePromise: Promise<PostJson[]> = Promise.all(allUsers)
    //     let postJson: PostJson[] = await singlePromise;

    //     postJson.forEach((post) => {
    //         const singleUserData: UserJson = userData.find(user => post[0].userId === user.id ); //user is one element in the array, iterates through array of UserJson objects and returns first objec where user id matches post user id 
    //         const userName: string = singleUserData.name;
    //         console.log(`${userName} posted ${post.length} comments`);

    //     });
    // }

    // constructor() {
    //from before async/await 
    // const fetchResultPromise: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/users');
    // fetchResultPromise.then(this.onUserFetchFulfilled, this.onUserFetchRejected);
    //     this.init3();
    // }
