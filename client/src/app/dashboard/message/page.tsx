import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming shadcn card component path
import { Metadata } from 'next';
import axios from "axios";

type TMessage = {
    _id: string,
    fullName: string,
    email: string,
    subject: string,
    message: string,
    createdAt: string
}

export const metadata: Metadata = {
    title: "Dashboard | Messages",
    description: "Explore my portfolio of projects, showcasing my expertise in web development. From front-end designs to full-stack applications, see what I've built!",
  };

const MessagesPage = async () => {
    const res = await axios.get(`http://localhost:5000/api/message`)
  const messages = res?.data?.data
    return (
        <div className="p-4">
            <div className="mb-5">
                <h1 className="text-2xl font-semibold">Who Messages Us.</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto text-center">
                {
                    messages.map((message: TMessage) => (
                        <Card key={message._id} className="shadow-lg hover:shadow-2xl transition-all">
                            <CardHeader className="flex items-center space-x-4">
                                <div>
                                    <CardTitle className="text-xl font-semibold">{message.fullName}</CardTitle>
                                    <CardDescription className="text-lg text-gray-500">{message.email}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="text-start">
                                <p className="text-gray-800 text-lg font-semibold dark:text-gray-300 mb-4">{message.subject}</p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{message.message}</p>
                                <span className="text-xs text-gray-400">{new Date(message.createdAt).toLocaleDateString()}</span>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </div>
    );
};

export default MessagesPage;
