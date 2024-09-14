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

export default function LatestArticleTile ({ 
  imageUrl,
  title,
  shortDescription,
  category,
  author,
  date,
  longDescription
}: ArticleProps) {
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
          <h2 className="text-lg font-bold text-white mb-1">{title}</h2>
          <p className="text-xs text-gray-200">{shortDescription}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <div className="flex items-center">
              <UserIcon className="w-3 h-3 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-3 h-3 mr-1" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}