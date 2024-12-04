import { useTheme } from "@ui-kitten/components";
import { useLayout } from "hooks";
import * as React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const Pagination: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const theme = useTheme();
  const { width } = useLayout();
  const _width = (width - 52) / 3;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-_width, 0, _width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-_width, 0, _width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  const styled = useAnimatedStyle(() => {
    return {
      height: interpolate(
        animValue.value,
        [index - 1, index, index + 1],
        [4, 4, 4],
        Extrapolate.CLAMP
      ),
    };
  });
  return (
    <Animated.View
      style={[
        {
          marginHorizontal: 2,
          width: 105,
          height: 12,
          borderRadius: 50,
          overflow: "hidden",
          backgroundColor: theme["background-basic-color-3"],
          transform: [
            {
              rotateZ: isRotate ? "90deg" : "0deg",
            },
          ],
        },
        styled,
      ]}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </Animated.View>
  );
};
export default Pagination;
