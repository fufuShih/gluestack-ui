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
      <Path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <Path d="m7 16.5-4.74-2.85" />
      <Path d="m7 16.5 5-3" />
      <Path d="M7 16.5v5.17" />
      <Path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <Path d="m17 16.5-5-3" />
      <Path d="m17 16.5 4.74-2.85" />
      <Path d="M17 16.5v5.17" />
      <Path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <Path d="M12 8 7.26 5.15" />
      <Path d="m12 8 4.74-2.85" />
      <Path d="M12 13.5V8" />
    </Svg>
  );
};
Icon.displayName = 'Boxes';
export const Boxes = React.memo(Icon);
