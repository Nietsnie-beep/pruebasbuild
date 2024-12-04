import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  ScrollView,
  ViewProps,
  TouchableOpacity,
  ImageRequireSource,
} from 'react-native';
import {Avatar} from '@ui-kitten/components';

interface NewFeedProps {
  data: ImageRequireSource[];
  level?: '1' | '2' | '3' | '4';
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
  accessoryLeft?: React.ReactElement<ViewProps>;
  showUnread?: boolean;
}

const NewFeedList = ({data, onPress, style, accessoryLeft}: NewFeedProps) => {
  return (
    <View style={[style, styles.layout]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{paddingLeft: 12}}>{accessoryLeft}</View>
        {data.map((i, _) => {
          return (
            <View key={_}>
              <TouchableOpacity
                onPress={onPress}
                style={{paddingHorizontal: 12}}
                key={_}>
                <Avatar size="giant" source={i} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NewFeedList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    paddingTop: 10,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    flexDirection: 'row',
  },
});
