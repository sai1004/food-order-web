export interface AuthForm {
    email: string;
    password: string;
}

export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role?: string;
}

export interface SigninPayload {
    email: string;
    password: string;
}

export interface SigninResponse {
    identity: AuthUser;
    access_token: string;
}
