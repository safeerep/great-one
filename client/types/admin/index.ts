export type signInCredentials = {
    email: string,
    password: string
}

export interface AdminState {
    loading: boolean;
    data: any | null;
    error: string | null | undefined;
}
