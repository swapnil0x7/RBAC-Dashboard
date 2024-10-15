import React from "react";
import "./loadingSpinner.css";
import Lottie from "lottie-react";
import Spinner from "../../assets/Spinner.json";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner__container">
      <div className="spinner">
        <Lottie animationData={Spinner} />
      </div>
      <h4>Switching user...</h4>
    </div>
  );
};

export default LoadingSpinner;
