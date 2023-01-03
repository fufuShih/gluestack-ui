import React from 'react';
import { Svg, Path } from 'react-native-svg';
const Icon = (props: any) => {
  const { color = 'black', size = 24 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M15 4V2" />
      <Path d="M15 16v-2" />
      <Path d="M8 9h2" />
      <Path d="M20 9h2" />
      <Path d="M17.8 11.8 19 13" />
      <Path d="M15 9h0" />
      <Path d="M17.8 6.2 19 5" />
      <Path d="m3 21 9-9" />
      <Path d="M12.2 6.2 11 5" />
    </Svg>
  );
};
Icon.displayName = 'Wand';
export const Wand = React.memo(Icon);
