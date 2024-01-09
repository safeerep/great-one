import { ProductsCollection } from "../schemas";
import { IProduct } from "../../../../entities/productEntities";

// to give the details about a certain product
export const getProductDetails = async ( productId: string) :Promise< IProduct | boolean> => {
    try {
        const productDetails = await ProductsCollection.findById( productId )
        if (productDetails) return productDetails as IProduct;
        else return false;
    } catch (error) {
        console.log(`an error happened during fetching the data about a specific product ${error}`);
        return false;
    }
}

// to add product 
export const addProduct = async (productDetails: any ) :Promise<IProduct | boolean> => {
    try {
        const newProduct = await ProductsCollection.create(productDetails)
        if (newProduct) return newProduct as IProduct;
        else return false;
    } catch (error) {
        console.log(`an error happened during adding a new one product ${error}`);
        return false;
    }
}

// to ban or release a product by admin
export const changeProductDetails = async ( productId: string, status: boolean) :Promise<IProduct | boolean> => {
    try {
        const updatedProduct = await ProductsCollection.findByIdAndUpdate( productId, {
            status: status
        })
        if (updatedProduct) return updatedProduct as IProduct;
        else return false
    } catch (error) {
        console.log(`an error happened during changing the status of a particular product ${error}`);
        return false;
    }
}

// to get all products
export const getAllProducts = async () :Promise< IProduct[] | boolean> => {
    try {
        const products = await ProductsCollection.find()
        if (products) return products as IProduct[];
        return false;
    } catch (error) {
        console.log(`something went wrong during fetching all the products ${error}`);
        return false;
    }
}