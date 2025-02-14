import { model, Schema } from "mongoose";
import { TMessage } from "./messageInterface";

const messageSchema = new Schema<TMessage>({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required: [true, 'email field is required']
    },
    message: {
        type: String,
        required: [true, 'message field is required']
    },
}, { timestamps: true, versionKey: false })

// create model 
export const messageModel = model<TMessage>('messages', messageSchema)