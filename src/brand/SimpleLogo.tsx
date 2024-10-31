import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {useAppTheme} from '@hooks';

interface SimpleLogoProps {
  width?: number;
}

export function SimpleLogo({width = 105}: SimpleLogoProps) {
  const {colors} = useAppTheme();

  return (
    <Svg
      width={width}
      height={(width * 24) / 105}
      viewBox="0 0 105 24"
      fill="none">
      <Path
        d="M105 3.5C105 4.88071 103.881 6 102.5 6C101.119 6 100 4.88071 100 3.5C100 2.11929 101.119 1 102.5 1C103.881 1 105 2.11929 105 3.5Z"
        fill="#F86F2D"
      />
      <Path
        d="M4.79642 23.5932V15.0196C4.79642 13.0795 6.0111 11.8279 7.91098 11.8279C9.56169 11.8279 10.6518 13.1108 10.6518 15.0821V23.5932H15.4482V13.9244C15.4482 9.82529 13.2992 7.4472 9.59284 7.4472C7.56838 7.4472 5.79308 8.22947 4.82757 9.57497L4.51611 7.94785H0V23.5932H4.79642Z"
        fill={colors.backgroundContrast}
      />
      <Path
        d="M29.2284 7.94785V16.0834C29.2284 18.6493 28.3875 19.7132 26.3319 19.7132C24.3697 19.7132 23.4976 18.5867 23.4976 16.0209V7.94785H18.7012V17.7731C18.7012 21.6219 20.8814 24 24.432 24C26.3007 24 28.2318 23.1239 29.1973 21.8409L29.5087 23.5932H34.0248V7.94785H29.2284Z"
        fill={colors.backgroundContrast}
      />
      <Path
        d="M42.1402 23.5932L42.3894 21.5906C43.2303 23.03 45.099 24 47.2792 24C51.7019 24 54.7853 20.7771 54.7853 15.927C54.7853 10.8266 52.0134 7.41591 47.653 7.41591C45.4105 7.41591 43.3549 8.35463 42.4205 9.76271V0H37.6241V23.5932H42.1402ZM42.4517 15.6767C42.4517 13.3299 44.0089 11.7653 46.2514 11.7653C48.5251 11.7653 49.9577 13.3611 49.9577 15.6767C49.9577 17.9922 48.5251 19.588 46.2514 19.588C44.0089 19.588 42.4517 18.0235 42.4517 15.6767Z"
        fill={colors.backgroundContrast}
      />
      <Path
        d="M62.0624 23.5932L62.3116 21.5906C63.1525 23.03 65.0213 24 67.2015 24C71.6241 24 74.7075 20.7771 74.7075 15.927C74.7075 10.8266 71.9356 7.41591 67.5752 7.41591C65.3327 7.41591 63.2771 8.35463 62.3427 9.76271V0H57.5463V23.5932H62.0624ZM62.3739 15.6767C62.3739 13.3299 63.9312 11.7653 66.1736 11.7653C68.4473 11.7653 69.88 13.3611 69.88 15.6767C69.88 17.9922 68.4473 19.588 66.1736 19.588C63.9312 19.588 62.3739 18.0235 62.3739 15.6767Z"
        fill={colors.backgroundContrast}
      />
      <Path
        d="M82.265 23.5932V0H77.4685V23.5932H82.265Z"
        fill={colors.backgroundContrast}
      />
      <Path
        d="M93.089 24C97.356 24 100.439 21.7784 101 18.3051H96.6085C96.2659 19.4316 94.9889 20.0887 93.1825 20.0887C91.0646 20.0887 89.9122 19.1186 89.6319 17.0535L100.938 16.9909V15.7705C100.938 10.6701 97.8854 7.4472 92.9956 7.4472C88.2926 7.4472 85.0223 10.8579 85.0223 15.7392C85.0223 20.558 88.386 24 93.089 24ZM93.0267 11.3585C94.9578 11.3585 96.1724 12.4224 96.1724 14.0808H89.6942C90.0679 12.2034 91.1269 11.3585 93.0267 11.3585Z"
        fill={colors.backgroundContrast}
      />
    </Svg>
  );
}
