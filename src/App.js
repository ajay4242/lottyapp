import React from 'react';
import Lottie from 'react-lottie';
import one from './lotty/one.json';
import two from './lotty/two.json';
import bthree from './lotty/bthree.json';
import three from './lotty/three.json';	

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData:three ,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={600}
        width={1200}

      />
    </div>
  );
  }
