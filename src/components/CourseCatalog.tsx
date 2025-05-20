import React, { useState } from "react";
import { Search, Filter, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  duration: string;
  level: string;
  price: number;
  thumbnail: string;
  category: string;
}

const CourseCard = ({
  id,
  title,
  instructor,
  rating,
  ratingCount,
  duration,
  level,
  price,
  thumbnail,
  category,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-card">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-primary">{category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{instructor}</p>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-500 mr-1">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </div>
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-xs text-muted-foreground ml-1">
            ({ratingCount.toLocaleString()})
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <Badge variant="outline">{duration}</Badge>
          <Badge variant="outline">{level}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <div className="font-bold">${price.toFixed(2)}</div>
        <Button size="sm">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  duration: string;
  level: string;
  price: number;
  thumbnail: string;
  category: string;
}

interface CourseCatalogProps {
  featuredOnly?: boolean;
}

const CourseCatalog = ({ featuredOnly = false }: CourseCatalogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for courses
  const mockCourses: Course[] = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.8,
      ratingCount: 12543,
      duration: "63 hours",
      level: "Beginner to Advanced",
      price: 89.99,
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Machine Learning A-Z: Hands-On Python & R",
      instructor: "Kirill Eremenko",
      rating: 4.7,
      ratingCount: 8976,
      duration: "44 hours",
      level: "Intermediate",
      price: 94.99,
      thumbnail:
        "https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&q=80",
      category: "Data Science",
    },
    {
      id: "3",
      title: "The Complete Digital Marketing Course",
      instructor: "Rob Percival",
      rating: 4.5,
      ratingCount: 5432,
      duration: "38 hours",
      level: "Beginner",
      price: 79.99,
      thumbnail:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
      category: "Marketing",
    },
    {
      id: "4",
      title: "iOS App Development with Swift",
      instructor: "Stephen Grider",
      rating: 4.9,
      ratingCount: 3245,
      duration: "55 hours",
      level: "Intermediate to Advanced",
      price: 99.99,
      thumbnail:
        "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80",
      category: "Mobile Development",
    },
    {
      id: "5",
      title: "Advanced JavaScript Concepts",
      instructor: "Andrei Neagoie",
      rating: 4.8,
      ratingCount: 7654,
      duration: "24 hours",
      level: "Advanced",
      price: 69.99,
      thumbnail:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
      category: "Web Development",
    },
    {
      id: "6",
      title: "Graphic Design Masterclass",
      instructor: "Lindsay Marsh",
      rating: 4.6,
      ratingCount: 4321,
      duration: "32 hours",
      level: "All Levels",
      price: 84.99,
      thumbnail:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      category: "Design",
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "web-dev", name: "Web Development" },
    { id: "data-science", name: "Data Science" },
    { id: "mobile-dev", name: "Mobile Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "business", name: "Business" },
  ];

  // Filter courses based on search query and selected category
  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort courses based on selected sort option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "popular") return b.ratingCount - a.ratingCount;
    if (sortBy === "highest-rated") return b.rating - a.rating;
    if (sortBy === "newest") return parseInt(b.id) - parseInt(a.id);
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  // Pagination logic
  const coursesPerPage = 6;
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage,
  );

  return (
    <div className="bg-background w-full p-4 md:p-8">
      {!featuredOnly && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Course Catalog</h1>
          <p className="text-muted-foreground">
            Browse our extensive collection of courses to enhance your skills
          </p>
        </div>
      )}

      {featuredOnly ? (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Courses</h2>
          <Button variant="outline">View All Courses</Button>
        </div>
      ) : (
        <div className="flex flex-col space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses by title or instructor"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full h-auto flex flex-wrap gap-2 bg-transparent justify-start">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="rounded-full border border-input px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select defaultValue="popular" onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="highest-rated">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {paginatedCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              ratingCount={course.ratingCount}
              duration={course.duration}
              level={course.level}
              price={course.price}
              thumbnail={course.thumbnail}
              category={course.category}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No courses found</h3>
          <p className="text-muted-foreground max-w-md">
            We couldn't find any courses matching your search criteria. Try
            adjusting your filters or search query.
          </p>
        </div>
      )}

      {!featuredOnly && totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default CourseCatalog;
