import { Router } from "express";
import { productController } from "./projectsController";

const projectsRouter = Router()

projectsRouter.post('/create', productController.createConProduct)
projectsRouter.get('/',  productController.getConProduct)
projectsRouter.get('/:id',  productController.getSingleConProduct)
projectsRouter.patch('/:id',  productController.updateSingleConProduct)
projectsRouter.delete('/:id',   productController.deleteSingleConProduct)

export default projectsRouter