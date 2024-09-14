import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, UserIcon } from 'lucide-react'

interface ArticleProps {
  imageUrl: string;
  title: string;
  shortDescription: string;
  category: string;
  author: string;
  date: string;
  longDescription: string;
}

export default function LatestArticle ({ 
  imageUrl = "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  title = "The Future of AI in Web Development",
  shortDescription = "Exploring the impact of artificial intelligence on modern web development practices.",
  category = "Technology",
  author = "Jane Doe",
  date = "2023-04-15",
  longDescription = "Artificial Intelligence is revolutionizing the way we approach web development. From automated coding assistants to intelligent design systems, AI is streamlining processes and opening new possibilities for developers and designers alike. This article delves into the current AI trends in web development and speculates on future advancements that could reshape the industry."
}: 

ArticleProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <div className="relative h-64 md:h-80">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-sm text-gray-200">{shortDescription}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <Badge variant="secondary">{category}</Badge>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>{date}</span>
            </div>
          </div>
          <p className="text-gray-600">{longDescription}</p>
        </div>
      </CardContent>
    </Card>
  )
}