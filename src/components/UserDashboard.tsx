import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  BookOpen,
  Clock,
  Award,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  thumbnail: string;
  nextLesson: string;
  dueDate?: string;
  category: string;
}

interface UserDashboardProps {
  userName?: string;
  enrolledCourses?: Course[];
  completionRate?: number;
  totalHoursLearned?: number;
  certificatesEarned?: number;
  upcomingDeadlines?: Array<{
    id: string;
    title: string;
    date: string;
    courseId: string;
  }>;
}

const UserDashboard = ({
  userName = "Alex Johnson",
  enrolledCourses = [
    {
      id: "1",
      title: "Introduction to React",
      instructor: "Sarah Miller",
      progress: 65,
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      nextLesson: "React Hooks Deep Dive",
      dueDate: "2023-06-15",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Advanced JavaScript Patterns",
      instructor: "Michael Chen",
      progress: 42,
      thumbnail:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      nextLesson: "Functional Programming",
      category: "Programming",
    },
    {
      id: "3",
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Rodriguez",
      progress: 89,
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      nextLesson: "Design Systems",
      dueDate: "2023-06-28",
      category: "Design",
    },
    {
      id: "4",
      title: "Data Science with Python",
      instructor: "David Kim",
      progress: 23,
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      nextLesson: "Pandas Library",
      category: "Data Science",
    },
  ],
  completionRate = 68,
  totalHoursLearned = 47,
  certificatesEarned = 3,
  upcomingDeadlines = [
    {
      id: "1",
      title: "React Project Submission",
      date: "2023-06-15",
      courseId: "1",
    },
    {
      id: "2",
      title: "Design Portfolio Review",
      date: "2023-06-28",
      courseId: "3",
    },
    { id: "3", title: "JavaScript Quiz", date: "2023-07-05", courseId: "2" },
  ],
}: UserDashboardProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-background min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with user info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                alt={userName}
              />
              <AvatarFallback>
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {userName}</h1>
              <p className="text-muted-foreground">
                Continue your learning journey
              </p>
            </div>
          </div>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" /> Browse Courses
          </Button>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Stats Cards */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Completion Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{completionRate}%</div>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Progress value={completionRate} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Hours Learned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      {totalHoursLearned}
                    </div>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    +3.5 hours this week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Certificates Earned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      {certificatesEarned}
                    </div>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    1 certificate pending
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Continue Learning Section */}
            <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {enrolledCourses.slice(0, 3).map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <CardDescription>{course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">
                        Next: {course.nextLesson}
                      </span>
                      <Button size="sm">Continue</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upcoming Deadlines Section */}
            <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {upcomingDeadlines.map((deadline) => (
                    <li
                      key={deadline.id}
                      className="flex items-center justify-between p-4"
                    >
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{deadline.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatDate(deadline.date)}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Courses Tab */}
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <CardDescription>{course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-muted-foreground">
                        {course.dueDate
                          ? `Due: ${formatDate(course.dueDate)}`
                          : "No deadline"}
                      </span>
                      <Button size="sm">Continue</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Deadlines Tab */}
          <TabsContent value="deadlines">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>
                  Stay on track with your course deadlines
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {upcomingDeadlines.map((deadline) => {
                    const relatedCourse = enrolledCourses.find(
                      (course) => course.id === deadline.courseId,
                    );
                    return (
                      <li
                        key={deadline.id}
                        className="flex items-center justify-between p-4"
                      >
                        <div className="flex items-center gap-3">
                          <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{deadline.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(deadline.date)} •{" "}
                              {relatedCourse?.title}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certificates</CardTitle>
                  <CardDescription>
                    Your earned certificates and credentials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Award className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium">
                          Web Development Fundamentals
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Issued May 2023
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium">JavaScript Mastery</p>
                        <p className="text-sm text-muted-foreground">
                          Issued March 2023
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium">Responsive Design</p>
                        <p className="text-sm text-muted-foreground">
                          Issued January 2023
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Milestones</CardTitle>
                  <CardDescription>
                    Track your learning achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                      <div>
                        <p className="font-medium">Completed 10 courses</p>
                        <p className="text-sm text-muted-foreground">
                          Milestone reached
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                      <div>
                        <p className="font-medium">50+ hours of learning</p>
                        <p className="text-sm text-muted-foreground">
                          Milestone reached
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center">
                        <span className="text-xs">5/8</span>
                      </div>
                      <div>
                        <p className="font-medium">
                          Complete Web Developer Path
                        </p>
                        <p className="text-sm text-muted-foreground">
                          In progress
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
