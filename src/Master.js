import React, { lazy, Suspense } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import List from './pages/listPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <List/>,
  },
]);


export default router;
