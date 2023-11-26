// FitnessAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import fitnessAnimationData from './fitness.json'; // Update with your animation path

const FitnessAnimation = () => {
  const containerStyle = {
    width: '100%', // Adjust the width of the container
    height: '80vh', // Adjust the height of the container
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: fitnessAnimationData,
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

export default FitnessAnimation;