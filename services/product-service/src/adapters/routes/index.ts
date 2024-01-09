import { Router } from 'express'
import productRoutes from './productRoutes';
import categoryRoutes from './categoryRoutes';

export const routes = ( dependencies: any) => {
    const routes = Router();

    routes.use('/category', categoryRoutes)
    routes.use('/', productRoutes)
    
    return routes;
}