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
import { useEffect, useState } from "react"
import { toast } from "sonner"
import axios from "axios"
import Image from "next/image";
import { Pencil } from "lucide-react";
import { TProject } from "../ForProjects/ProjectsCard";
import { TBlog } from "./BlogsCard"
const formSchema = z.object({
    title: z.string({ required_error: "title is required." }).optional(),
    image: z.string().optional(),
    description: z.string({ required_error: "description is required." }).optional(),
});
const UpdateBlog = ({ blog }: { blog: TBlog }) => {
    console.log(blog);

    const addBlog = {}
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            image: "",
            description: ""
        }
    })

    // image upload to coudinary start 
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (file: File) => {
        setImage(file);
    };
    // image upload to coudinary  end 

    const { reset } = form

    useEffect(() => {
        reset({
            title: blog?.title || "",
            image: blog?.image || "",
            description: blog?.description || ""
        });
    }, [blog, reset]);



    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Loading...")
        try {
            let imageUrl = data?.image;
            if (image) {
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "cycle_labs"); // Replace with your Cloudinary preset

                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dvjeaplel/image/upload", // Replace with your Cloudinary cloud name
                    formData
                );

                // cloudirnay img url 
                imageUrl = response.data.secure_url
            }

            const blogData = {
                ...data,
                image: imageUrl
            }
            const res = await axios.patch(`http://localhost:5000/api/blogs/${blog?._id}`, blogData)
            if ("error" in res) {
                toast.error((res?.error as any)?.error || "Something went wrong", { id: toastId })
            } else {
                toast.success("Product Added Successfull...", { id: toastId })
                reset()
                setOpen(!open)
            }
        } catch (error) {
            toast.error('Failed to Add Product. Please try again.')
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div onClick={() => setOpen(!open)}>
                    <Button variant={"outline"} className="text-green-600"><Pencil size={18} /></Button>
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
                                    <FormLabel>Product Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Product Title" {...field} value={field.value || ''} />
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
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Product Image</FormLabel>
                                    <FormControl>
                                        <div className="flex flex-col gap-2">
                                            {/* Show Image Preview if Available */}
                                            {field.value && typeof field.value === "string" && (
                                                <Image src={field.value} width={50} height={50}
                                                    alt="Product" className="w-32 h-32 object-cover rounded-lg border" />
                                            )}

                                            {/* File Input for Image Upload */}
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        handleImageChange(file); // Upload & update form state
                                                    }
                                                }}
                                            />
                                        </div>
                                    </FormControl>

                                    {/* Error Message */}
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
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded">Add Blog</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateBlog;