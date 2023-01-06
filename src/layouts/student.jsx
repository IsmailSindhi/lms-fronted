import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/admin";
import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  AdminSidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

import React from 'react'
  
const icon = {
  className: "w-5 h-5 text-inherit",
};

  const routes = [{
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
  }];
export function Student() {
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
    <AdminSidenav
      routes={routes}
     
    />
    <div className="p-4 xl:ml-80">
      <DashboardNavbar />
      <Configurator />
      <IconButton
        size="lg"
        color="white"
        className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
        ripple={false}
        onClick={() => setOpenConfigurator(dispatch, true)}
      >
        <Cog6ToothIcon className="h-5 w-5" />
      </IconButton>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "admin" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      <div className="text-blue-gray-600">
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Student