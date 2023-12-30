export default async () => {
    try {
        if (!process.env.PORT) throw new Error ('PORT NUMBER IS REQUIRED')
        if (!process.env.MONGODB_URL) throw new Error ('MONGODB_URL IS REQUIRED')
        if (!process.env.JWT_TOKEN_SECRET) throw new Error ('JWT_TOKEN_SECRET IS REQUIRED')
        if (!process.env.JWT_REFRESH_TOKEN_SECRET) throw new Error ('JWT_REFRESH_TOKEN_SECRET IS REQUIRED')
    } catch ( error: any) {
        console.log(error.message)
    }
}
