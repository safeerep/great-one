import express, { Request, Response, response} from 'express'
import { userControllers } from '../../handlers/controllers'

export = ( dependencies: any) => {
    const router = express.Router()
    const { sendOtpController, userSignupController, } = userControllers(dependencies)
    
    router.get('/', (req: Request, res: Response) => {
        res.send('its from routes')
    })

    router.post('/send-otp', sendOtpController)
    router.post('/signup', userSignupController)

    return router;
}

