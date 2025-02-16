/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";

// Define validation schema using Zod
const formSchema = z.object({
    fullName: z.string().min(2, "First name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    subject: z.string().min(3, "Subject must be at least 3 characters."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const { reset } = form

    // Handle form submission
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const toastId = toast.loading("Loading...")
        console.log("Form Data:", data);
        try {
            const res = await axios.post(`https://my-portfolio-backend-ebon.vercel.app/api/message/create`, { ...data })

            if ("error" in res) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                toast.error((res?.error as any)?.error || "Something went wrong", {id: toastId})
            } else {
                toast.success("Message Sent Successfull...", {id: toastId})
                reset()
            }

        } catch (error) {
            toast.error('Failed to Sent Message. Please try again.', {id: toastId})
        }
    };

    return (
        <div className="mx-auto flex w-full flex-col gap-3 rounded-xl border shadow-lg dark:bg-gray-800 dark:text-white p-6 max-w-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                    {/* full Name */}
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter Full Name" className="dark:bg-gray-700 dark:text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Email */}
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type="email" placeholder="Enter Email Address" className="dark:bg-gray-700 dark:text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Subject */}
                    <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter Subject" className="dark:bg-gray-700 dark:text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Message */}
                    <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Type your message here..." className="dark:bg-gray-700 dark:text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded dark:bg-blue-400 dark:hover:bg-blue-500">
                        Send Message
                    </Button>

                </form>
            </Form>
        </div>
    );
}
