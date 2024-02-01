import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center background-color:rgb(25,30,36) bg-opacity-75 z-50">
      <TailSpin color="#A6ADBB" height={90} width={90} />
    </div>
  );
};

export default LoadingScreen;
