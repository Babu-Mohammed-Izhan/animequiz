import React from 'react';

interface RadialProgress {
  sqSize: number;
  percentage: number;
  strokeWidth: number;
}

const RadialProgressbar = ({
  sqSize,
  strokeWidth,
  percentage,
}: RadialProgress) => {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage * 20) / 100;

  return (
    <svg
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
      className="fill-white"
    >
      <circle
        className="fill-transparent stroke-slate-300"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-transparent stroke-white "
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        className="md:text-md text-xl"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {percentage}
      </text>
    </svg>
  );
};

export default RadialProgressbar;
