export type signUpCredentials = {
    userName: string,
    email: string,
    phone?: number | string,
    password: string
}

export type signUpCredentialsWithOtp = signUpCredentials & {
    otp: number
}

