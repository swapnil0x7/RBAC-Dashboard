import React from "react";
import { NavLink } from "react-router-dom";

const UnauthorizedAccess = () => {
  return (
    <div className="section" style={{ textAlign: "center", padding: "20px" }}>
      <p
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "8rem",
          fontWeight: "600",
        }}
      >
        401
      </p>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <NavLink to={"/"} className="navigate"> Go back to HomePage </NavLink>
    </div>
  );
};

export default UnauthorizedAccess;
