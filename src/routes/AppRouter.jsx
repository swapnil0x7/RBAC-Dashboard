import { lazy, React, Suspense } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
const AdminPage = lazy(() => import("../pages/AdminPage.pages.jsx"));
const EditorPage = lazy(() => import("../pages/EditorPage.pages.jsx"));
const ViewerPage = lazy(() => import("../pages/ViewerPage.pages.jsx"));
const Layout = lazy(() => import("../pages/Layout.pages.jsx"));
const UnauthorizedAccess = lazy(() =>
  import("../pages/UnauthorizedAccess.pages.jsx")
);
const PageNotFound = lazy(() => import("../pages/PageNotFound.pages.jsx"));

const role = useSelector((state) => state.role.role);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute role={role} allowedRoles={["Admin"]}>
              <AdminPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "editor",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute role={role} allowedRoles={["Editor"]}>
              <EditorPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "viewer",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
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
          <Suspense fallback={<div>Loading...</div>}>
            <UnauthorizedAccess />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default AppRouter;
