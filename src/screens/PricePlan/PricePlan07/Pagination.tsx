import { useLayout } from "hooks";
import * as React from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  interpolateColor,
} from "react-native-reanimated";

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
}> = (props) => {
  const { animValue, index, length, backgroundColor } = props;
  const { width } = useLayout();
  const animStyleContainer = useAnimatedStyle(() => {
    const sm = 56;
    const large = 120 * (width / 375);
    let inputRange = [index - 10, index - 1, index, index + 1, index + 10];
    let outputRange = [sm, sm, large, sm, sm];
    let outputColor = ["#FFFFFF", "#FFFFFF", "#5784E8", "#FFFFFF", "#FFFFFF"];
    const _width = interpolate(animValue.value, inputRange, outputRange);
    const color = interpolateColor(animValue.value, inputRange, outputColor);
    const opacity = interpolate(animValue.value, inputRange, [0.5,0.5,1,0.5,0.5]);

    return {
      width: _width,
      backgroundColor: color,
      opacity
    };
  }, [animValue, index, length]);
  return (
    <Animated.View
      style={[
        {
          height: 4,
          borderRadius: 50,
        },
        animStyleContainer,
      ]}
    />
  );
};
export default PaginationItem;
