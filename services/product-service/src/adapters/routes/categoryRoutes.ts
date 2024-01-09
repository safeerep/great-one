import { Router } from "express";

export = ( dependencies: any) => {
    const router = Router();

    router.get('/', (req, res) => {
        res.send("ok its fine")
    })
    return router;
}