import { Response } from 'express'
import generateToken from "../../../utils/externalServices/tokenGenerator"
export = () => {
    const googleAuthSucceed = (req: any, res: Response) => {
        try {
            if (req?.user?._id) {
                const token = generateToken(req?.user?._id)
                req.session.userJwt = token;
                return res.redirect(process.env.CLIENT_URL + '')
            }
            else return res.redirect(process.env.CLIENT_URL + '')
        } catch (error) {
            return res.redirect(process.env.CLIENT_URL + '')         
        }
    } 
    return googleAuthSucceed
}