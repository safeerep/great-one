import { userCollection, IUserData} from '../../index'


export const createNewUser = async (userCredentials: IUserData) :Promise<IUserData> => {
    try {
        userCredentials.status = true;
        userCredentials.premiumMember = false;
        console.log(userCredentials);
        
        const newUser = await userCollection.create(userCredentials);
        if (newUser) return newUser as IUserData;

        else throw new Error ('something went wrong during creating new user')
    } catch (error) {
        console.log(`error from creation `, error);
        
        throw new Error ('something went wrong during creating new user')
    }
};

export const getUserData = async (email: string) => {
    console.log(`in repository get userdata`);
    console.log(email);
    try {   
        const userData = await userCollection.findOne({ email: email})
        if (!userData) return false;
        return userData;
    } catch (error:any) {
        console.log(`here happened an error \n`, error);
        return 'something went wrong'
    }
};

export const userLogin = async (email: string, password: string) :Promise< IUserData | boolean> => {
        
    const existingUser = await userCollection.findOne({ email: email})
    if (!existingUser) return false;

    // const currentPassword: string = String(existingUser.password)
    // const passwordIsMatching: boolean | void = await bcrypt.compare(currentPassword, password)
    // if (!passwordIsMatching) return false;

    return existingUser as IUserData;
};


