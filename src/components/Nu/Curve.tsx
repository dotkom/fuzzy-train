import * as React from 'react';
import * as style from './Curve.scss';

export const Curve = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1920"
    height="1500"
    fill="none"
    className={style.svg}
  >
    <defs>
      <linearGradient
        id="b"
        x1="965.517"
        y1="1112.869"
        x2="720.69"
        y2="3.448"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#731494" />
        <stop offset="1" stop-color="#09254b" />
      </linearGradient>
    </defs>
    <path
      d="M0 0v1373s139.473-51.143 233-58.5c136.617-10.746 211.413 84.308 346 58.5 158.926-30.476 187.531-180.737 338.5-239 222.79-85.98 377.33 46.81 611.5 0 158.28-31.639 391-134 391-134V0z"
      fill="url(#b)"
      paintOrder="markers fill stroke"
    />
  </svg>
);
