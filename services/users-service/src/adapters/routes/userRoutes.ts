import express, { Request, Response, response} from 'express'
import { userControllers } from '../../handlers/controllers'

export = ( dependencies: any) => {
    const router = express.Router()
    const { userSignupController } = userControllers(dependencies)
    
    router.get('/', (req: Request, res: Response) => {
        res.send('its from routes')
    })

    router.post('/signup', userSignupController)
    return router;
}

