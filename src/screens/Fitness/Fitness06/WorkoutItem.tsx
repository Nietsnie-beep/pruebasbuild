import React from 'react';
import {View, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {StyleService, useStyleSheet, Layout} from '@ui-kitten/components';

import Text from 'components/Text';

interface Props {
  id: number;
  title: string;
  image: ImageSourcePropType;
  times: number;
  rep: number;
}
interface DataProps {
  data: Props;
  onPress?(): void;
}
const WorkoutItem = ({data, onPress}: DataProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Layout level="2" style={styles.item}>
        <Image
          source={data.image}
          /* @ts-ignore */
          style={styles.img}
        />
        <View>
          <Text marginLeft={24} category="h6">
            {data.title}
          </Text>
          <View style={styles.times}>
            <Text
              status="platinum"
              category="subhead"
              children={`${data.times} times`}
            />
            <Layout style={styles.dot} />
            <Text
              status="platinum"
              category="subhead"
              children={`${data.rep} reps`}
            />
          </View>
        </View>
      </Layout>
    </TouchableOpacity>
  );
};

export default WorkoutItem;

const themedStyles = StyleService.create({
  times: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 24,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 55,
    backgroundColor: 'color-basic-1200',
    marginHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 12,
  },
  img: {
    borderRadius: 12,
  },
});
