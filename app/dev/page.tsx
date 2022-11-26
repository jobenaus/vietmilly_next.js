'use client';

import { useEffect, useState } from 'react';

export default function Dev() {
  // const left = document.getElementById('left-side');
  const titleStyle = {
    fontSize: '8vw',
    margin: '20vw',
    width: '80vw',
  };

  const [leftWidth, setLeftWidth] = useState('60%');

  useEffect(() => {
    const handleMove = (e: Touch | MouseEvent) => {
      setLeftWidth(`${(e.clientX / window.innerWidth) * 100}%`);
    };

    document.onmousemove = (e) => handleMove(e);

    document.ontouchmove = (e) => handleMove(e.touches[0]);
  }, []);

  return (
    <>
      <div
        id="left-side"
        className="bg-blue-200 z-20 h-screen overflow-hidden grid place-items-center absolute"
        style={{ width: leftWidth }}
      >
        <h2 className="text-white" style={titleStyle}>
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
