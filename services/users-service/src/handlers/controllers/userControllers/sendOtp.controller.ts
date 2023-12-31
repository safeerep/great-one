import { Request, Response, NextFunction } from "express";
import { sendOtp } from "../../../utils/externalServices";

export = ( dependencies: any): any => {
    const { useCases: {
        storeOtp_usecase,
    }} = dependencies;
    const sendOtpController = async ( req: Request, res: Response, next: NextFunction) => {
        try {
            const otp =  Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            const email: string = req.body.email;
            const sentSuccessfully: boolean | any = sendOtp( otp, email)

            storeOtp_usecase(dependencies).execute(email, otp)

            if (sentSuccessfully) return res.json({ success: true, message: 'otp sent successfully through email'})
            return res.json({ success: false, message: "something went wrong"})
        } catch (error) {
            return res.json({ success: false, message: 'abnormal error happened'})
        }
    }

    return sendOtpController
}

