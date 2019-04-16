import React from 'react';

const EyeSvg = props => (
  <svg id="eye" width="1em" height="1em" fill="currentColor" {...props}>
    <g fillRule="evenodd">
      <path d="M2,12 C4.66666667,7.33333333 8,5 12,5 C16,5 19.3333333,7.33333333 22,12 C19.3333333,16.6666667 16,19 12,19 C8,19 4.66666667,16.6666667 2,12 Z M12,16.5 C14.4852814,16.5 16.5,14.4852814 16.5,12 C16.5,9.51471863 14.4852814,7.5 12,7.5 C9.51471863,7.5 7.5,9.51471863 7.5,12 C7.5,14.4852814 9.51471863,16.5 12,16.5 Z" />
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
    </g>
  </svg>
);

export default EyeSvg;
