import {model, Schema} from "mongoose";

interface ITag {
    name: string;
  
}

const tagSchema = new Schema(
    {
        name:{ type: String, required: true},
        description:{ type: String, required: true}
    },
    {
        timestamps:true,
        toJSON:{
            transform(doc, rel: Record<string, unknown>){
                delete rel._v
                delete rel.createdAt
                delete rel.updatedAt
            }
        }
    }
)

const Tag = model<ITag>('tag', tagSchema)

export default Tag;