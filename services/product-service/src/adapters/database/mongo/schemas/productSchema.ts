import mongoose, { Schema } from "mongoose";
import { IProduct } from "../../../../entities/productEntities";

const ProductsSchema: Schema = new Schema({
  UserId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
    unique: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Category: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  Active: {
    type: Boolean,
    required: true,
  },
  Images: [
    {
      type: String,
      required: true,
    },
  ],
  Featured: {
    type: Boolean,
    required: true,
  },
  ReportsOnProduct: [
    {
      Reason: {
        type: String,
      },
      ReportedBy: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  Views: {
    type: Number,
  },
});

const Products = mongoose.model<IProduct>("Products", ProductsSchema);

export default Products;