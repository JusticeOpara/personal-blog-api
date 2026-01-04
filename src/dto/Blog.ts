export interface CreateBlogInput {
    title: string;
    content: string;
    category: Array<string>;
    tags: Array<string>
}

export interface UpdateBlogInput{
    title: string;
    content: string;
    category: string;
}

export interface AddCommentInputs {
    content: string;
}