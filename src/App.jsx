import React, { Suspense, lazy } from "react";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import { fallbackText } from "./utils/constants.utils.js";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.components.jsx";

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
        <Suspense fallback={<LoadingSpinner />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "admin",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProtectedRoute role={role} allowedRoles={["Admin"]}>
                <AdminPage />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "editor",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ProtectedRoute role={role} allowedRoles={["Editor"]}>
                <EditorPage />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "viewer",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
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
            <Suspense fallback={<LoadingSpinner />}>
              <UnauthorizedAccess />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
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
