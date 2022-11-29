'use client';

import { useEffect, useState } from 'react';
import { nerko_one } from '../../styles/fonts';

export function Dev() {
  return (
    <div className="h-[50vh] w-1/2 border border-blue-600 m-10 relative">
      <div className="h-1/2 w-1/2 bg-red-600 opacity- z-10 absolute"></div>
      <div className="h-1/2 w-1/2 bg-yellow-600 absolute inset-0"></div>
    </div>
  );
}

export default function DevHome() {
  const titleStyle = {
    fontSize: '8vw',
    margin: '20vw',
    width: '80vw',
  };

  const [leftWidth, setLeftWidth] = useState(0);

  // tan (90-12) =  h / w -> w = h / tan (90° - 12°) = h / tan ((90-12)*Math.PI/180)
  // h = (innerHeight/2) + y

  useEffect(() => {
    const handleMove = (e: Touch | MouseEvent) => {
      setLeftWidth(
        e.clientX -
          (window.innerHeight / 2 - e.clientY - window.scrollY) /
            Math.tan(((90 - 12) * Math.PI) / 180) +
          80
      );
    };

    document.onmousemove = (e) => handleMove(e);

    document.ontouchmove = (e) => handleMove(e.touches[0]);
  }, []);

  return (
    <div
      className="absolute inset-0 h-screen w-full z-0
    "
    >
      <div
        id="left-side"
        className="bg-blue-200 z-20 h-screen overflow-hidden grid place-items-center absolute -skew-x-12 -translate-x-20"
        style={{ width: `${leftWidth}px` }}
      >
        {/* <p className={nerko_one.className}>Test</p> */}

        <h2
          className={`text-white skew-x-12 translate-x-20 ${nerko_one.className}`}
          style={titleStyle}
        >
          VIETMILLY JOURNAL
        </h2>
      </div>

      <div
        className={`bg-orange-200 h-screen overflow-hidden w-full grid place-items-center absolute ${nerko_one.className}`}
      >
        <h2 className="text-black" style={titleStyle}>
          VIETMILLY JOURNAL
        </h2>
      </div>
      <div className="h-[200vh]"></div>
    </div>
  );
}
