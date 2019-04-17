import React from 'react';

const EyeSvg = props => (
  <svg
    id="exclamation"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <g fillRule="evenodd">
      <polygon points="12 3 22 20.32 2 20.32" />
      <circle cx="12" cy="18.001" r="1" fill="currentColor" />
      <polygon points="11 9 13 9 12.8 16 11.2 16" fill="currentColor" />
    </g>
  </svg>
);

export default EyeSvg;
