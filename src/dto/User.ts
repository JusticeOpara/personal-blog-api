export interface UserSignUpInput{
    username:  string;
    email: string;
    password: string;
    role: string;
    bio: string;
}

export interface UserSignInInput{
    email: string;
    password: string;
}