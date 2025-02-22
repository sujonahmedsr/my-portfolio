"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { startTransition, useState } from "react"
import { toast } from "sonner"
import axios from "axios"
import { revalidateTag } from "next/cache"
import { revalidateBlogs } from "@/actions/revalidateData"
const formSchema = z.object({
    title: z.string({ required_error: "title is required." }),
    image: z.string().optional(),
    description: z.string({ required_error: "description is required." }),
});
const AddBlog = () => {
    const addBlog = {}
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    // image upload to coudinary start 
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (file: File) => {
        setImage(file);
    };
    // image upload to coudinary  end 

    const { reset } = form

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Loading...")
        try {
            if (!image) return toast.error("Please select an image first!");

            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "cycle_labs"); // Replace with your Cloudinary preset

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dvjeaplel/image/upload", // Replace with your Cloudinary cloud name
                formData
            );

            // cloudirnay img url 
            const imageUrl = response.data.secure_url

            const blogData = {
                ...data,
                image: imageUrl
            }
            const res = await axios.post(`${`https://my-portfolio-backend-ebon.vercel.app/api`}/blogs/create`, blogData)

            if ("error" in res) {
                toast.error((res?.error as any)?.error || "Something went wrong", { id: toastId })
            } else {
                await revalidateBlogs()
                toast.success("Blog Added Successfull...", { id: toastId })
                reset()
                setOpen(!open)
            }
        } catch (error) {
            toast.error('Failed to Add Blog. Please try again.')
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div onClick={() => setOpen(!open)}>
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:text-white rounded">Add Blog</Button>
                </div>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
                <DialogTitle className="sr-only">Add Blog</DialogTitle>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-md mx-auto w-full">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Blog Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Blog Title" {...field} value={field.value || ''} />
                                    </FormControl>
                                    {
                                        error && <p className="text-red-500">{error.message}</p>
                                    }
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Blog Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    handleImageChange(file); // Store the selected file in state
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="description-dialog" // Set the ID to match `aria-describedby`
                                            placeholder="Enter description"
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                    {
                                        error && <p className="text-red-500">{error.message}</p>
                                    }
                                </FormItem>
                            )}
                        />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded dark:text-white">Add Blog</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddBlog;