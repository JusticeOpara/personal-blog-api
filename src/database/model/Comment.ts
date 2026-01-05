import {model, Schema, Types} from "mongoose";

interface IComment{
    blogId: string;
    content: string;
    authorId: Types.ObjectId;
}


const commentSchema = new Schema(
    {
        blogId: { type: Schema.Types.ObjectId, ref: 'blog' },
        content:{ type: String, required: true },
        authorId: { type: Schema.Types.ObjectId, ref:  'user', required: true }
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

const Comment = model<IComment>('comment', commentSchema)

export default Comment;