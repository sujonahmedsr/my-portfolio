import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming shadcn card component path
import Image from "next/image";

const messages = [
    {
        id: 1,
        userName: "John Doe",
        email: "john.doe@example.com",
        image: "https://randomuser.me/api/portraits/men/1.jpg", // Random image or user-specific image URL
        description: "This is a sample message description. Lorem ipsum dolor sit amet.",
        date: new Date(),
    },
    {
        id: 2,
        userName: "Jane Smith",
        email: "jane.smith@example.com",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        description: "Another message description. Curabitur lobortis enim neque, quis aliquet nulla vulputate eget.",
        date: new Date(),
    },
    // Add 8 more message objects here
];

const MessagesPage = () => {
    return (
        <div className="p-4">
            <div className="mb-5">
                <h1 className="text-2xl font-semibold">Who Messages Us.</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto text-center">
                {
                    messages.map((message) => (
                        <Card key={message.id} className="shadow-lg hover:shadow-2xl transition-all">
                            <CardHeader className="flex items-center space-x-4">
                                <Image src={message.image} alt={message.userName} width={500} height={500} className="w-24 h-24 rounded-full" />
                                <div>
                                    <CardTitle className="text-lg font-semibold">{message.userName}</CardTitle>
                                    <CardDescription className="text-sm text-gray-500">{message.email}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{message.description}</p>
                                <span className="text-xs text-gray-400">{'message.date'}</span>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </div>
    );
};

export default MessagesPage;
