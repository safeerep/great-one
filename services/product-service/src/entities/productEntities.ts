import { Document, ObjectId } from 'mongoose';

export interface IProduct extends Document {
  _id: ObjectId;
  UserId: ObjectId;
  ProductName: String;
  Description: String;
  Price: Number;
  Category: ObjectId;
  Active: Boolean;
  Images: String[];
  Featured: Boolean;
  ReportsOnProduct: {
     Reason: String | null;
     ReportedBy: ObjectId | null;
  }[];
  Views: Number | null;
}
