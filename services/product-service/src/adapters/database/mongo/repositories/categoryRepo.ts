import { CategoriesCollection } from "../schemas";
import { ICategory } from "../../../../entities/categoryEntities";

// to add a new category
export const addCategory = async ( categoryDetails: any) :Promise< ICategory[] | boolean > => {
    try {
        const newCategory = await CategoriesCollection.create(categoryDetails)
        if (newCategory) {
            const categories = await CategoriesCollection.find()
            return categories as ICategory[];
        }
        else return false;
    } catch (error) {
        console.log(`an error happened during adding a new category ${error}`);
        return false;
    }
}

// to check that, is there have a category with specific name
export const isCategoryExist = async ( categoryName: string) :Promise< ICategory | boolean > => {
    try {
        const existingCategory = await CategoriesCollection.findOne({ 
            categoryName: {
                $regex: categoryName,
                $options: "i"
            }
        })
        if (existingCategory) return existingCategory as ICategory;
        else return false;
    } catch (error) {
        console.log(`an error happened during checking the category is existing or not ${error}`);
        return false;
    }
}

// to get all categories
export const getAllCategories = async () :Promise< ICategory[] | boolean > => {
    try {
        const categories = await CategoriesCollection.find()
        return categories as ICategory[];
    } catch (error) {
        console.log(`an error happened during fetching the categories ${error}`);
        return false;
    }
}

// to find category's current status 
export const getCurrentStatus = async ( categoryId: string ) :Promise< boolean> => {
    try {
        const category = await CategoriesCollection.findById(categoryId)
        if (category) {
            return category?.status as boolean;
        }
        else {
            console.log(` ehh safeer check it once`);
            return false
        }
    } catch (error) {
        console.log(`an error happened during checking status of the category ${error}`);
        return false;
    }
}

// change category status 
export const changeCategoryStatus = async ( categoryId: string, status: boolean) :Promise< ICategory[] | boolean> => {
    try {
        const statusUpdatedCategory = await CategoriesCollection.findByIdAndUpdate( categoryId, {
            status: status
        })
        if (statusUpdatedCategory) {
            const categories = await CategoriesCollection.find()
            return categories as ICategory[];
        }
        else return false;
    } catch (error) {
        console.log(`an error happened during changing the status of a category ${error}`);
        return false;
    }
}

// update categoryDetails 
export const updateCategoryDetails = 
    async ( categoryId: string, categoryDetails: any) :Promise< ICategory[] | boolean> => {
        try {
            const updatedCategory = await CategoriesCollection.findByIdAndUpdate(categoryId, {
                ...categoryDetails
            })
            if (updatedCategory) {
                const categories = await CategoriesCollection.find()
                return categories;
            }
            return false;
        } catch (error) {
            console.log(`an error happened during updating the category details ${error}`);
            return false;
        }
}