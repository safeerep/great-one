import { adminCollection } from "../../";
import { IAdmin } from "../../../../../entities/adminEntities";

export const findAdminWithEmail = async (email: string):Promise <IAdmin | boolean> => {
  try {
    const adminData = await adminCollection.findOne({ email: email });
    if (!adminData) return false;
    return adminData as IAdmin;
  } catch (error: any) {
    console.log(`here happened an error \n`, error);
    return false;
  }
};


export const getAdminDataFromId = async (adminId: string):Promise <IAdmin | boolean> => {
    try {
      const adminData = await adminCollection.findOne({ _id: adminId });
      if (!adminData) return false;
      return adminData;
    } catch (error: any) {
      console.log(`here happened an error \n`, error);
      return false;
    }
};
  
