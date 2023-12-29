export const login_usecase = (dependencies: any) => {
    const { repository: { 
        userRepo
    }} = dependencies;

    if (!userRepo) throw new Error('dependency is required for login in userrepository')

    const execute = ( email: string, password: string) => {
        return userRepo.userLogin(email, password)
    }

    return { execute }
}