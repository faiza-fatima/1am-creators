// Routes.jsx
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopFive from "pages/DesktopFive";

const ProjectRoutes = () => {
    let element = useRoutes([
       { path: "/1am-codes/", element: <Home />},
       { path: "*", element: <Notfound /> },
       {
          path: "desktopfive",
          element: <DesktopFive />,
       },
     ]);
     
   return element;
};

export default ProjectRoutes;