import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import Text from 'components/Text';
import {Slider} from '@miblanchard/react-native-slider';
interface Props {
  value: number;
  maxValue: number;
  time: string;
  style?: StyleProp<ViewStyle>;
}

const CustomSlider = ({value, maxValue, time = '00:00', style}: Props) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, style]}>
      <Text status="primary" category="h1" style={styles.text}>
        {time}
      </Text>
      <Slider
        thumbTintColor={'transparent'}
        value={value}
        step={1}
        minimumValue={0}
        renderThumbComponent={() => null}
        maximumValue={maxValue}
        trackStyle={styles.track}
        minimumTrackTintColor={'#5784E8'}
        maximumTrackTintColor={'#F5F7FA'}
      />
    </View>
  );
};

export default CustomSlider;

const themedStyles = StyleService.create({
  container: {},
  track: {
    height: 80,
  },
  text: {
    textAlign: 'center',
    position: 'absolute',
    zIndex: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
});
