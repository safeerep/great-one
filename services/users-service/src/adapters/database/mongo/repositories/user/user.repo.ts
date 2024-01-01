import { userCollection, IUserData} from '../../index'
import { otpCollection, IOtpDocument } from '../../index';



export const createNewUser = async (userCredentials: IUserData) :Promise<IUserData | boolean> => {
    try {
        userCredentials.status = true;
        userCredentials.premiumMember = false;
        console.log(userCredentials);
        
        const newUser = await userCollection.create(userCredentials);
        if (newUser) return newUser as IUserData;
        else throw new Error ('something went wrong during creating new user')
    } catch (error: any) {
        // if phone number is already existing;
        if (error.code === 11000) return false
        return false;
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
        return false;
    }
};

export const getUserWithPhone = async (phone: number) => {
    console.log(`in repository get userwithphone`);
    console.log(phone);
    try {   
        const userData = await userCollection.findOne({ phone: phone})
        if (!userData) return false;
        return true;
    } catch (error:any) {
        console.log(`here happened an error \n`, error);
        return true;
    }
};

export const userLogin = async (email: string, password: string) :Promise< IUserData | boolean> => { 
    console.log(email);
    console.log(password);
    
    const existingUser = await userCollection.findOne({ email: email, password: password})
    console.log(`in repo`, existingUser);
    
    if (!existingUser) return false;
    return existingUser as IUserData;
};

export const storeOtp = async (email: string, otp: number):Promise< void > => {
    try {
        await otpCollection.create({email, otp})
    } catch (error: any) {
        if (error.code === 11000) console.log(`already an otp is there which is not expired`);
        console.log('something went wrong during saving otp in database');
    }
}


export const verifyOtp = async (email: string, otp: number):Promise< boolean > => {
    try {
        const currentUser = await otpCollection.findOne({ email: email, otp: otp})
        if (currentUser) return true;
        return false;
    } catch (error: any) {
        return false;
    }
}




