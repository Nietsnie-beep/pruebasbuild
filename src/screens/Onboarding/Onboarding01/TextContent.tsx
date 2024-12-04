import * as React from 'react';
import {Text} from 'components';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface ITextContentProps {
  index: number;
  animValue: Animated.SharedValue<number>;
  title: string;
  describe: string;
}

const TextContent = ({
  index,
  animValue,
  title,
  describe,
}: ITextContentProps) => {
  const styled = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [0, 1, 0];
    const opacity = interpolate(animValue.value, inputRange, outputRange);
    return {
      opacity: withTiming(opacity, {
        duration: 100,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      marginTop: 56,
    };
  });
  return (
    <Animated.View style={styled}>
      <Text category="h2" center marginBottom={16}>
        {title}
      </Text>
      <Text category="body" status="placeholder" center>
        {describe}
      </Text>
    </Animated.View>
  );
};
export default TextContent;
