import * as $ from "jquery"

export interface UserJson {
    id: number;
    name: string;
};

export interface PostJson {
    numPosts: number;
}


export class FeedbackFormDataService {

    public getUserAsync = async (): Promise<UserJson[]> => {
        const data: UserJson[] = await $.ajax(`https://jsonplaceholder.typicode.com/users`);
        console.log(data);
        return data;
    }

    public getPostsAsync = async (userId: number): Promise<PostJson> => {
        const data: PostJson = await $.ajax(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        console.log(data);
        return data;
    }

}