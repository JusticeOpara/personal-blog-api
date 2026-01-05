import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  bio?: string;
  email: string;
  passwordhash: string;
  salt: string;
  role: "admin" | "user" | "editor";
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
    passwordhash: { type: String, required: true },
    salt: { type: String, required: true },
    role: { type: String, enum: ["admin", "user", "editor"], default: "user" },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret) {
        const { passwordhash, salt, __v, ...safe } = ret;
        return safe;
      },
    },
  }
);

const User = model<IUser>("user", userSchema);

export default User;
