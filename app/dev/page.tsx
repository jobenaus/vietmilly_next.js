'use client';

import { useEffect, useState } from 'react';

export default function Dev() {
  const titleStyle = {
    fontSize: '8vw',
    margin: '20vw',
    width: '80vw',
  };

  console.log(Math.tan((45 * Math.PI) / 180));

  const [leftWidth, setLeftWidth] = useState('60%');

  // tan (90-12) =  h / w -> w = h / tan (90° - 12°) = h / tan ((90-12)*Math.PI/180)
  // h = (innerHeight/2) + y

  useEffect(() => {
    const handleMove = (e: Touch | MouseEvent) => {
      setLeftWidth(
        `calc(${(e.clientX / window.innerWidth) * 100}% 
         - ${
           (window.innerHeight / 2 - e.clientY) /
           Math.tan(((90 - 12) * Math.PI) / 180)
         }px)`
      );
      console.log(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
    };

    document.onmousemove = (e) => handleMove(e);

    document.ontouchmove = (e) => handleMove(e.touches[0]);
  }, []);

  return (
    <>
      <div
        id="left-side"
        className="bg-blue-200 z-20 h-screen overflow-hidden grid place-items-center absolute -skew-x-12"
        style={{ width: leftWidth }}
      >
        <h2 className="text-white skew-x-12" style={titleStyle}>
          Vietmilly Journal
        </h2>
      </div>

      <div className="bg-orange-200 h-screen overflow-hidden w-full grid place-items-center absolute">
        <h2 className="text-black" style={titleStyle}>
          Vietmilly Journal
        </h2>
      </div>
    </>
  );
}
