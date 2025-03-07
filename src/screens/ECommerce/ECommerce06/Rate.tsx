import React from 'react';
import {View, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import Text from 'components/Text';
import useLayout from 'hooks/useLayout';

interface Props {
  defaultRate: number;
  setDefaultRate: React.Dispatch<React.SetStateAction<number>>;
  reviewer?: number;
  style?: StyleProp<ViewStyle>;
}
const Rate = ({defaultRate, setDefaultRate, reviewer, style}: Props) => {
  const {width} = useLayout();

  const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, {width: width - 80}, style]}>
      {maxRating.map((item, _) => {
        return (
          <TouchableOpacity
            key={_}
            style={[styles.button]}
            onPress={() => setDefaultRate(_ + 1)}
            activeOpacity={0.7}>
            {item < defaultRate + 1 ? (
              <Icon pack="assets" name="rated" style={[styles.star, {}]} />
            ) : (
              <Icon pack="assets" name="rate" style={[styles.star, {}]} />
            )}
          </TouchableOpacity>
        );
      })}
      {reviewer ? (
        <Text
          uppercase
          marginLeft={4}
          category="footnote"
          status="snow"
          children={`(${reviewer} reviewer)`}
        />
      ) : null}
    </View>
  );
};

export default Rate;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  star: {
    height: 40,
    width: 40,
  },
  button: {
    backgroundColor: 'transparent',
  },
});
