import { Schema, model, Document, Model } from "mongoose";

interface UserModel {
  username: string;
  password: string;
}

interface UserModelDocument extends Document, UserModel {}

type UserObject = UserModelDocument & {
  _id: any;
};

const userSchema: Schema<UserModelDocument> = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.index({ username: 1 });

const User: Model<UserModelDocument> = model<UserModelDocument>(
  "User",
  userSchema
);
export { UserModel, UserModelDocument, UserObject, User };
