import { Document, model, Schema, Types } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  category: Types.ObjectId[];
  tags: Types.ObjectId[];
  comments: Types.ObjectId[];
}

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "user", required: true },
    category: [{ type: Schema.Types.ObjectId, ref: "category" }],
    tags: [{ type: Schema.Types.ObjectId, ref: "tag" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  },
  {
    timestamps: true,
    toJSON: {
        
      transform(doc, ret: Record<string, unknown>) {
        delete ret._v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
  }
);

const Blog = model<IBlog>("blog", blogSchema);

export default Blog;
