// AnalyticsAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import analyticsAnimationData from './analytics.json'; // Updated import statement

const AnalyticsAnimation = () => {
  const containerStyle = {
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'flex-start', // Align to the left
    alignItems: 'center',
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: analyticsAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={containerStyle}>
      <Lottie options={animationOptions} height={'60%'} width={'60%'} />
    </div>
  );
};

export default AnalyticsAnimation;
