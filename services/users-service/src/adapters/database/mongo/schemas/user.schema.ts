import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IUser } from "../../../../entities/user.entities";

const UsersSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
    },
    status: {
      type: Boolean,
      required: true,
    },
    premiumMember: {
      type: Boolean,
      required: true,
    },
    favouriteProducts: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    connectedPersons: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    connectionRequests: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    blockedPersons: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    reportsOnAccount: [
      {
        reason: {
          type: String,
        },
        reportedBy: {
          type: Schema.Types.ObjectId,
        },
      },
    ],
    subscription: {
      policy: {
        type: String,
        enum: ["annual", " monthly"],
      },
      takenOn: {
        type: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("Users", UsersSchema);

export interface IUserData extends IUser{
    createdAt: Date;
    updatedAt: Date;
}

