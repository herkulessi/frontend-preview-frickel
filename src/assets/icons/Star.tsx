import React from 'react';

// This is the star-emote from twemoji (v14.0.2)
// https://raw.githubusercontent.com/twitter/twemoji/gh-pages/v/14.0.2/svg/2b50.svg
export type StarIconProps = {
  percentage?: number;
};

const StarIcon = ({ percentage = 100 }: StarIconProps) => {
  const id = `star-${percentage}`;
  return (
    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id={id}>
        <stop offset={`${percentage}%`} stopColor={`#FFAC33`} />
        <stop offset={`${percentage}%`} stopColor={`lightgrey`} />
      </linearGradient>
      <path
        fill={'url(#' + id + ')'}
        d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834c-.693.496-1.623.496-2.312-.008-.689-.499-.979-1.385-.721-2.194l3.034-9.792-8.062-5.681c-.685-.505-.97-1.393-.708-2.203.264-.808 1.016-1.357 1.866-1.363L12.947 13l3.179-9.549c.268-.809 1.023-1.353 1.874-1.353.851 0 1.606.545 1.875 1.353L23 13l10.036.015c.853.006 1.606.556 1.867 1.363.263.81-.022 1.698-.708 2.203l-8.062 5.681 3.034 9.792c.26.809-.033 1.695-.72 2.194-.347.254-.753.379-1.16.379z"
      />
    </svg>
  );
};

export default StarIcon;
