import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  View,
} from 'react-native';
import {Icon, useTheme} from '@ui-kitten/components';
import Animated from 'react-native-reanimated';
import {Text} from 'components';
import useLayout from 'hooks/useLayout';

interface Props {
  title: string;
  icon: string;
}

interface ItemProps {
  tabs: Props[];
  level?: string;
  style?: ViewStyle;
  activeIndex: number;
  onChange(index: number): void;
}

const TabBar = ({style, activeIndex, onChange, tabs}: ItemProps) => {
  const theme = useTheme();
  const AniButton = Animated.createAnimatedComponent(TouchableOpacity);
  const {width} = useLayout();
  const changeIndex = React.useCallback(
    (i: number) => {
      return onChange(i);
    },
    [activeIndex],
  );
  const refScrollView = React.useRef<ScrollView>(null);
  React.useEffect(() => {
    refScrollView.current?.scrollTo({
      x: activeIndex * 120 + 8 - (width - 250) / 2,
      animated: true,
    });
  }, [activeIndex]);
  return (
    <View>
      <ScrollView
        contentContainerStyle={[styles.container, style]}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={refScrollView}>
        {tabs.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <AniButton
              key={index}
              style={[
                styles.btn,
                {
                  borderColor: theme['background-basic-color-3'],
                  backgroundColor: isActive
                    ? theme['background-basic-color-5']
                    : 'transparent',
                },
              ]}
              onPress={() => changeIndex(index)}
              activeOpacity={0.7}>
              <Icon
                name={item.icon}
                pack="assets"
                style={[
                  styles.icon,
                  {
                    tintColor: !isActive
                      ? theme['text-basic-color']
                      : theme['text-white-color'],
                  },
                ]}
              />
              <Text
                capitalize
                status={isActive ? 'white' : 'basic'}
                category={isActive ? 'subhead' : 'h8'}
                marginLeft={12}>
                {item.title}
              </Text>
            </AniButton>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  btn: {
    marginRight: 16,
    flexDirection: 'row',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
});
