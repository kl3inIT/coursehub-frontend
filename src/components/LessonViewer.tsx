import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  BookOpen,
  CheckCircle,
  List,
  X,
  MessageSquare,
  Download,
} from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface LessonViewerProps {
  courseTitle?: string;
  lessonTitle?: string;
  videoUrl?: string;
  textContent?: string;
  currentLesson?: number;
  totalLessons?: number;
  progress?: number;
  outline?: LessonOutlineItem[];
  instructor?: {
    name: string;
    avatar: string;
  };
}

interface LessonOutlineItem {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

const LessonViewer = ({
  courseTitle = "Advanced Web Development",
  lessonTitle = "Understanding React Hooks",
  videoUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  textContent = "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. React provides a few built-in Hooks like useState, useEffect, useContext, etc.",
  currentLesson = 3,
  totalLessons = 12,
  progress = 25,
  outline = [
    {
      id: 1,
      title: "Introduction to React",
      duration: "10:30",
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: 2,
      title: "Setting Up Your Environment",
      duration: "15:45",
      isCompleted: true,
      isCurrent: false,
    },
    {
      id: 3,
      title: "Understanding React Hooks",
      duration: "20:15",
      isCompleted: false,
      isCurrent: true,
    },
    {
      id: 4,
      title: "State Management with useState",
      duration: "18:20",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 5,
      title: "Side Effects with useEffect",
      duration: "22:10",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 6,
      title: "Context API and useContext",
      duration: "16:40",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 7,
      title: "Creating Custom Hooks",
      duration: "19:30",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 8,
      title: "Performance Optimization",
      duration: "25:15",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 9,
      title: "Testing React Components",
      duration: "17:50",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 10,
      title: "Deployment Strategies",
      duration: "14:25",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 11,
      title: "Best Practices",
      duration: "21:30",
      isCompleted: false,
      isCurrent: false,
    },
    {
      id: 12,
      title: "Course Recap and Next Steps",
      duration: "12:45",
      isCompleted: false,
      isCurrent: false,
    },
  ],
  instructor = {
    name: "Dr. Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
}: LessonViewerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOutline, setShowOutline] = useState(false);
  const [activeTab, setActiveTab] = useState("video");

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control the video playback
  };

  const navigateLesson = (direction: "prev" | "next") => {
    // In a real implementation, this would navigate to the previous or next lesson
    console.log(`Navigate to ${direction} lesson`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Top navigation bar */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-sm font-medium text-muted-foreground">
              {courseTitle}
            </h2>
            <h1 className="text-xl font-semibold">{lessonTitle}</h1>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Lesson {currentLesson} of {totalLessons}
          </span>
          <Progress value={progress} className="w-24" />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Lesson content */}
        <div className="flex-1 p-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-4">
              <TabsTrigger value="video" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Video
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Text
              </TabsTrigger>
              <TabsTrigger
                value="discussion"
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Discussion
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="video" className="space-y-4">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <img
                  src={videoUrl}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-16 w-16 rounded-full bg-background/80 hover:bg-background/90"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8" />
                    )}
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between text-white">
                    <span>00:00 / 20:15</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20"
                      >
                        1x
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
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
                          className="h-5 w-5"
                        >
                          <polygon points="21 16 21 8 13 12 21 16"></polygon>
                          <rect width="6" height="12" x="3" y="6" rx="2"></rect>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => navigateLesson("prev")}
                  disabled={currentLesson === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous Lesson
                </Button>
                <Button
                  onClick={() => navigateLesson("next")}
                  disabled={currentLesson === totalLessons}
                  className="flex items-center gap-2"
                >
                  Next Lesson
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="text" className="space-y-4">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">{lessonTitle}</h2>
                <p className="text-lg">{textContent}</p>
                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Key Concepts
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>useState: Manage state in functional components</li>
                  <li>useEffect: Handle side effects in components</li>
                  <li>useContext: Access context values without nesting</li>
                  <li>useReducer: Complex state management with reducers</li>
                  <li>useCallback and useMemo: Performance optimization</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-2">
                  Example Code
                </h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
                </pre>
              </div>

              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => navigateLesson("prev")}
                  disabled={currentLesson === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous Lesson
                </Button>
                <Button
                  onClick={() => navigateLesson("next")}
                  disabled={currentLesson === totalLessons}
                  className="flex items-center gap-2"
                >
                  Next Lesson
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="discussion" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Discussion</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=john" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">John Doe</span>
                          <span className="text-xs text-muted-foreground">
                            2 days ago
                          </span>
                        </div>
                        <p>
                          I'm having trouble understanding how useEffect's
                          dependency array works. Can someone explain when I
                          should include dependencies?
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 pl-12">
                      <Avatar>
                        <AvatarImage src={instructor.avatar} />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{instructor.name}</span>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            Instructor
                          </span>
                          <span className="text-xs text-muted-foreground">
                            1 day ago
                          </span>
                        </div>
                        <p>
                          Great question! The dependency array should include
                          all values from your component scope that are used
                          inside the effect. This ensures the effect runs when
                          those values change.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Lesson Resources
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Lesson Slides (PDF)
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Code Examples (ZIP)
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Exercise Worksheet (PDF)
                      </Button>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-8 mb-4">
                    Additional Reading
                  </h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        React Hooks Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        A Complete Guide to useEffect
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        Building Your Own Hooks
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Mobile lesson outline toggle */}
        <div className="md:hidden fixed bottom-4 right-4">
          <Sheet open={showOutline} onOpenChange={setShowOutline}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-lg"
              >
                <List className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Course Outline</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-80px)] mt-6">
                <div className="space-y-1">
                  {outline.map((item) => (
                    <Button
                      key={item.id}
                      variant={item.isCurrent ? "default" : "ghost"}
                      className={`w-full justify-start ${item.isCompleted ? "text-muted-foreground" : ""}`}
                    >
                      <div className="flex items-center w-full">
                        <div className="mr-2">
                          {item.isCompleted ? (
                            <CheckCircle className="h-4 w-4 text-primary" />
                          ) : (
                            <div
                              className={`h-4 w-4 rounded-full border ${item.isCurrent ? "bg-primary border-primary" : "border-muted-foreground"}`}
                            />
                          )}
                        </div>
                        <div className="flex-1">{item.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.duration}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop lesson outline sidebar */}
        <div className="hidden md:block w-80 border-l p-4 overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Course Outline</h2>
            <span className="text-sm text-muted-foreground">
              {currentLesson}/{totalLessons} completed
            </span>
          </div>
          <Progress value={progress} className="mb-6" />
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-1">
              {outline.map((item) => (
                <Button
                  key={item.id}
                  variant={item.isCurrent ? "default" : "ghost"}
                  className={`w-full justify-start ${item.isCompleted ? "text-muted-foreground" : ""}`}
                >
                  <div className="flex items-center w-full">
                    <div className="mr-2">
                      {item.isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      ) : (
                        <div
                          className={`h-4 w-4 rounded-full border ${item.isCurrent ? "bg-primary border-primary" : "border-muted-foreground"}`}
                        />
                      )}
                    </div>
                    <div className="flex-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.duration}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </ScrollArea>
          <Separator className="my-4" />
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={instructor.avatar} />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{instructor.name}</p>
              <p className="text-xs text-muted-foreground">Course Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
