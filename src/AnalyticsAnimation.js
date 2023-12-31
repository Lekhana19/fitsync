// AnalyticsAnimation.js
import React from "react";
import Lottie from "react-lottie";
import analyticsAnimationData from "./analytics.json"; // Updated import statement

const AnalyticsAnimation = () => {
  const containerStyle = {
    width: "100%",
    paddingBottom: "100px",
    display: "flex",
    justifyContent: "flex-start", // Align to the left
    alignItems: "center",
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: analyticsAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={containerStyle}>
      <Lottie options={animationOptions} height={"50%"} width={"50%"} />
    </div>
  );
};

export default AnalyticsAnimation;
