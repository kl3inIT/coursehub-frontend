import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Search } from "lucide-react";
import CourseCard from "../../components/CourseCard";
import { ModeToggle } from "@/components/mode-toggle";

const Home = () => {
  // Mock data for featured courses
  const featuredCourses = [
    {
      id: "1",
      title: "Introduction to Web Development",
      instructor: "Jane Smith",
      rating: 4.8,
      reviewCount: 150,
      duration: "8 weeks",
      enrolledCount: 1200,
      price: 49.99,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      category: "Development",
      level: "Beginner" as const,
    },
    {
      id: "2",
      title: "Advanced JavaScript Concepts",
      instructor: "John Doe",
      rating: 4.9,
      reviewCount: 200,
      duration: "10 weeks",
      enrolledCount: 800,
      price: 69.99,
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      category: "Programming",
      level: "Advanced" as const,
    },
    {
      id: "3",
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Johnson",
      rating: 4.7,
      reviewCount: 180,
      duration: "6 weeks",
      enrolledCount: 950,
      price: 59.99,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      category: "Design",
      level: "Beginner" as const,
    },
    {
      id: "4",
      title: "Data Science Essentials",
      instructor: "Michael Chen",
      rating: 4.6,
      reviewCount: 120,
      duration: "12 weeks",
      enrolledCount: 600,
      price: 79.99,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "Data Science",
      level: "Intermediate" as const,
    },
  ];

  // Mock data for categories
  const categories = [
    { id: "1", name: "Web Development", count: 42, icon: "🌐" },
    { id: "2", name: "Data Science", count: 38, icon: "📊" },
    { id: "3", name: "Design", count: 25, icon: "🎨" },
    { id: "4", name: "Business", count: 30, icon: "💼" },
    { id: "5", name: "Marketing", count: 22, icon: "📈" },
    { id: "6", name: "Mobile Development", count: 18, icon: "📱" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">LearnHub</div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Expand Your Knowledge with Online Learning
              </h1>
              <p className="text-lg text-muted-foreground">
                Access thousands of courses taught by industry experts and
                enhance your skills at your own pace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Browse Courses</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students learning online"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search for courses, topics, or skills"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                {...course}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} courses
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose LearnHub
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-8 w-8"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of experience in
                their fields.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-8 w-8"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Learn at Your Pace</h3>
              <p className="text-muted-foreground">
                Access course content anytime, anywhere, and learn at a schedule
                that works for you.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-8 w-8"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Certificate of Completion
              </h3>
              <p className="text-muted-foreground">
                Earn certificates to showcase your skills and boost your
                professional profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Students Say
          </h2>

          <Tabs defaultValue="student1" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="student1">Alex</TabsTrigger>
              <TabsTrigger value="student2">Maria</TabsTrigger>
              <TabsTrigger value="student3">David</TabsTrigger>
            </TabsList>
            <TabsContent
              value="student1"
              className="mt-6 p-6 bg-card rounded-lg shadow"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                  alt="Alex"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-lg mb-4">
                  "LearnHub completely transformed my career path. The web
                  development courses were comprehensive and practical, allowing
                  me to land my dream job within months of completion."
                </p>
                <p className="font-medium">Alex Johnson, Web Developer</p>
              </div>
            </TabsContent>
            <TabsContent
              value="student2"
              className="mt-6 p-6 bg-card rounded-lg shadow"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
                  alt="Maria"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-lg mb-4">
                  "As a busy professional, I appreciated the flexibility
                  LearnHub offered. I could learn at my own pace and the quality
                  of instruction was exceptional."
                </p>
                <p className="font-medium">
                  Maria Garcia, Marketing Specialist
                </p>
              </div>
            </TabsContent>
            <TabsContent
              value="student3"
              className="mt-6 p-6 bg-card rounded-lg shadow"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"
                  alt="David"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-lg mb-4">
                  "The data science courses on LearnHub provided me with
                  practical skills I could immediately apply in my work. The
                  instructors were knowledgeable and supportive throughout my
                  learning journey."
                </p>
                <p className="font-medium">David Kim, Data Analyst</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on LearnHub. Start your
            journey today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
              Browse Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10"
            >
              Sign Up for Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">LearnHub</h3>
              <p className="text-muted-foreground">
                Empowering learners worldwide with quality education accessible
                to all.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/courses"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/category/web-development"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/data-science"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/design"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/business"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">
                  Subscribe to our newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-l-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} LearnHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
