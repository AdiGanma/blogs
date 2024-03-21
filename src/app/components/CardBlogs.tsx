import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CardBlogsProps {
  imageUrl: string;
  category: string;
  title: string;
  createdAt: string;
  author: string;
  description: string;
  slug:string
}

const CardBlogs: React.FC<CardBlogsProps> = ({
  imageUrl,
  category,
  title,
  createdAt,
  author,
  description,
  slug,
}) => {
  return (
    <Link href={`/${slug}`}>
      <Card>
        <CardHeader>
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          <Badge className="rounded-sm bg-green-100" variant="outline">
            {category}
          </Badge>
          <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
          <p className="text-sm font-light italic">24 Jan 2024 - {author}</p>
          <p className="line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardBlogs;
