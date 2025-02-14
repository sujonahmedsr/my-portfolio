import { messageModel } from "./messageSchemaModel"

const creacteMessage = async(payload: any) =>{
    const result = await messageModel.create(payload)
    return result
}
const allMessage = async() =>{
    const result = messageModel.find()
    return result
}

export const messageServices = {
    creacteMessage,
    allMessage
}