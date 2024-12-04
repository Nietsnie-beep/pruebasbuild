import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import Text from 'components/Text';
import useLayout from 'hooks/useLayout';

interface Props {
  defaultRate: number;
  reviewer?: number;
  style?: StyleProp<ViewStyle>;
}
const StarRating = ({defaultRate, reviewer, style}: Props) => {
  const {width} = useLayout();
  const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, {width: width - 80}, style]}>
      {maxRating.map((item, _) => {
        return (
          <View key={_} style={[styles.button]}>
            <Icon
              pack="assets"
              name="star"
              style={[
                styles.star,
                item > defaultRate + 1 && {tintColor: '#7B8794'},
              ]}
            />
          </View>
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

export default StarRating;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  star: {
    height: 16,
    width: 16,
    tintColor: 'text-primary-color',
  },
  button: {
    backgroundColor: 'transparent',
  },
});
