import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/widgets/layout";
import routes from "@/routes";

export function Auth() {
  const navbarRoutes = [
    {
      name: "Admin",
      path: "/auth/admin",
      icon: ChartPieIcon,
    },
    {
      name: "Teacher",
      path: "/auth/teacher",
      icon: UserPlusIcon,
    },
    {
      name: "Student",
      path: "/auth/student",
      icon: UserIcon,
    },
    
  ];

  return (
    <div className="relative min-h-screen w-full">
      <div className="container relative z-40 mx-auto p-4">
        <Navbar routes={navbarRoutes} />
      </div>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
