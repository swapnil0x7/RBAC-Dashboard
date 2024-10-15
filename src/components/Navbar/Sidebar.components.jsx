import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import Button from "../Button/Button.components.jsx";
import LOGO from "../../assets/logo.svg";
import { fetchUserRole } from "../../api/fetchRole.api.js";
import { roles } from "../../utils/constants.utils.js";
import {
  switchRoleFailure,
  switchRoleStart,
  switchRoleSuccess,
} from "../../redux/slices/roleSlice.js";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { role: currentRole } = useSelector((state) => state.role);

  const handleRoleSwitch = useCallback(
    async (role) => {
      try {
        dispatch(switchRoleStart());
        const response = await fetchUserRole(role);
        dispatch(switchRoleSuccess(response.role));
      } catch (err) {
        dispatch(switchRoleFailure("Error in switching role."));
      }
    },
    [dispatch]
  );

  return (
    <div className="navbar__container">
      <div className="left__container">
        <img
          className="logo"
          src={LOGO}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <div className="left__btn__container">
          {roles.map((role) => (
            <Button
              key={role}
              onClick={() => handleRoleSwitch(role)}
              isSelected={role === currentRole}
            >
              {role}
            </Button>
          ))}
        </div>
      </div>
      <div className="right__container">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Admin
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/editor"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Editor
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/viewer"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Viewer
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
