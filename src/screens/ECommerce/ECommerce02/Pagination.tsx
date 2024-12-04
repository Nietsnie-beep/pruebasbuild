import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const Pagination: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = props => {
  const {animValue, index, length, backgroundColor, isRotate} = props;
  const width = 4;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }
    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  const mainStyle = useAnimatedStyle(() => {
    let inputRange = [0, index - 1, index, index + 1, index + 2];
    const widthActive = interpolate(
      animValue.value,
      inputRange,
      [4, 4, 16, 4, 4],
    );
    return {
      width: widthActive,
      height: 4,
      backgroundColor: '#1F293340',
      borderRadius: 50,
      overflow: 'hidden',
      marginRight: 4,
      transform: [
        {
          rotateZ: isRotate ? '90deg' : '0deg',
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <Animated.View style={mainStyle}>
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
