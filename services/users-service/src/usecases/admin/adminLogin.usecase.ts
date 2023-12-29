export const adminLogin_usecase = (dependencies: any) => {
    const { repository: {
        adminRepo
    }} = dependencies;

    const execute = async (email: string, password: string) => {
        return adminRepo.adminLogin( email, password)
    }

    return { execute }
}