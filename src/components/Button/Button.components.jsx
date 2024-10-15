import React from "react";
import "./button.css";

const Button = ({ children, isSelected, ...props }) => {
  return (
    <div className={`button ${isSelected ? "button-selected" : ""}`} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Button);
