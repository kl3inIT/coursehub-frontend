import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from '@/app/login/page';
import Home from '@/app/homepage/home';
import CourseCatalog from '@/components/CourseCatalog';
import LessonViewer from '@/components/LessonViewer';
import UserDashboard from '@/components/UserDashboard';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/courses',
    element: <CourseCatalog />,
  },
  {
    path: '/courses/:courseId/lesson/:lessonId',
    element: <LessonViewer />,
  },
  {
    path: '/dashboard',
    element: <UserDashboard />,
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
} 