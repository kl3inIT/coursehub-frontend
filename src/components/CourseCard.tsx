import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  duration: string;
  enrolledCount: number;
  price: number;
  thumbnail: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  onEnroll?: (courseId: string) => void;
}

const CourseCard = ({
  id = "1",
  title = "Introduction to Web Development",
  instructor = "John Doe",
  rating = 4.5,
  reviewCount = 120,
  duration = "10 hours",
  enrolledCount = 1500,
  price = 49.99,
  thumbnail = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
  category = "Development",
  level = "Beginner",
  onEnroll = () => {},
}: CourseCardProps) => {
  const handleEnroll = () => {
    onEnroll(id);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full max-w-[350px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className={`${getLevelColor(level)}`}>
            {level}
          </Badge>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{instructor}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-muted-foreground text-sm">
            ({reviewCount} reviews)
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{enrolledCount.toLocaleString()} students</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-2">
        <div className="font-bold text-lg">${price.toFixed(2)}</div>
        <Button onClick={handleEnroll}>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
