import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, StudentSignIn,AdminSignIn,TeacherSignIn } from "@/pages/auth";
import NotFound from "./layouts/notFound";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  // {
  //   layout: "dashboard",
  //   pages: [
  //     {
  //       icon: <HomeIcon {...icon} />,
  //       name: "dashboard",
  //       path: "/home",
  //       element: <Home />,
  //     },
  //     {
  //       icon: <UserCircleIcon {...icon} />,
  //       name: "profile",
  //       path: "/profile",
  //       element: <Profile />,
  //     },
  //     {
  //       icon: <TableCellsIcon {...icon} />,
  //       name: "tables",
  //       path: "/tables",
  //       element: <Tables />,
  //     },
  //     {
  //       icon: <BellIcon {...icon} />,
  //       name: "notifactions",
  //       path: "/notifactions",
  //       element: <Notifications />,
  //     },
  //   ],
  // },
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "notifactions",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/admin",
        element: <AdminSignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/teacher",
        element: <TeacherSignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/student",
        element: <StudentSignIn />,
      },
    ],
  },
 
];

export default routes;
