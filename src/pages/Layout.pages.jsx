import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Navbar/Sidebar.components.jsx";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.components.jsx";

const Layout = () => {
  const { isLoading } = useSelector((state) => state.role);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="outlet">
        {isLoading ? <LoadingSpinner /> : <Outlet />}
      </div>
    </div>
  );
};

export default Layout;
