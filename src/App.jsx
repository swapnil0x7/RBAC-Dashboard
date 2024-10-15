import React, { Suspense, lazy } from "react";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import { fallbackText } from "./utils/constants.utils.js";

const AdminPage = lazy(() => import("./pages/AdminPage.pages.jsx"));
const EditorPage = lazy(() => import("./pages/EditorPage.pages.jsx"));
const ViewerPage = lazy(() => import("./pages/ViewerPage.pages.jsx"));
const Layout = lazy(() => import("./pages/Layout.pages.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.pages.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.pages.jsx"));
const UnauthorizedAccess = lazy(() =>
  import("./pages/UnauthorizedAccess.pages.jsx")
);

const App = () => {
  const role = useSelector((state) => state.role.role);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>{fallbackText}</div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>{fallbackText}</div>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "admin",
          element: (
            <Suspense fallback={<div>{fallbackText}</div>}>
              <ProtectedRoute role={role} allowedRoles={["Admin"]}>
                <AdminPage />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "editor",
          element: (
            <Suspense fallback={<div>{fallbackText}</div>}>
              <ProtectedRoute role={role} allowedRoles={["Editor"]}>
                <EditorPage />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "viewer",
          element: (
            <Suspense fallback={<div>{fallbackText}</div>}>
              <ProtectedRoute
                role={role}
                allowedRoles={["Viewer", "Admin", "Editor"]}
              >
                <ViewerPage />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "unauthorized",
          element: (
            <Suspense fallback={<div>{fallbackText}</div>}>
              <UnauthorizedAccess />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<div>{fallbackText}</div>}>
              <PageNotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
