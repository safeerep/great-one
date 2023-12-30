import { ObjectId, Document } from "mongoose";

export interface IUser extends Document {
  _id: ObjectId;
  userName: String;
  password: String;
  phone: Number;
  profilePhoto: String | null;
  email: String;
  status: Boolean;
  premiumMember: Boolean;
  favouriteProducts: ObjectId[] | null;
  connectedPersons: ObjectId[] | null;
  connectionRequests: ObjectId[] | null;
  blockedPersons: ObjectId[] | null;
  reportsOnAccount: {
    reason: String | null;
    reportedBy: ObjectId | null;
  }[];
  subscription: {
    policy: String | null;
    takenOn: Date | null;
  };
}
