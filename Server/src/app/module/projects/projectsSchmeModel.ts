import { model, Schema } from "mongoose";
import { projectsInterface } from "./projectsInterface";

// projects schema create with interface
const projectsSchema = new Schema<projectsInterface>({
    title: {
        type: String,
        required: [true, 'Name field is required']
    },
    image: {
        type: String,
        required: [true, 'Image field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    githubLink: {
        type: String,
        required: [true, 'githubLink field is required']
    },
    technologies: {
        type: String,
        required: [true, 'technologies field is required']
    },

}, { timestamps: true, versionKey: false })

// create model 
export const projectsModel = model<projectsInterface>('projects', projectsSchema)