import { model, Schema } from "mongoose";

export interface ICategory {
  name: string;
  description: string;
}

const categorySchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String }
    },
    {
        timestamps:true,
        toJSON:{
            transform(doc, rel:Record<string, unknown>){
                delete rel._v
                delete rel.createdAt
                delete rel.updatedAt
            }
        }
    }
)

const Category = model<ICategory>("category", categorySchema)

export default Category;