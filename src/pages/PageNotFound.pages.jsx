import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
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
        404
      </p>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <NavLink to={"/"} className="navigate">
        {" "}
        Go back to HomePage{" "}
      </NavLink>
    </div>
  );
};

export default PageNotFound;
