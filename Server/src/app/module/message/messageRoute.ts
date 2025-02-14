import { Router } from "express";
import { messageController } from "./messageController";

const messageRoute = Router()

messageRoute.post('/create', messageController.createMassage)
messageRoute.get('/', messageController.getAllMassage)

export default messageRoute