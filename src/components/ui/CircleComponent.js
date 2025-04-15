import Svg, { Circle } from "react-native-svg";

export default function CircleComponent({ width, height }) {
  return (
    <Svg height={height} width={width} viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="45" fill="#F7CCC3" />
    </Svg>
  );
}
