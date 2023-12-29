import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IAdmins extends Document {
  _id: ObjectId;
  Email: String;
  Password: String;
}

const AdminsSchema: Schema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

const Admins = mongoose.model<IAdmins>("Admins", AdminsSchema);

export default Admins;
