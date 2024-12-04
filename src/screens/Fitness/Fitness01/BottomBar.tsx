import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
} from '@ui-kitten/components';

import {HStack} from 'components';
import Images from 'assets/images';

interface BottomBarProps {
  activeIndex: number;
  setActiveIndex(index: number): void;
}

const BottomBar = React.memo(
  ({activeIndex, setActiveIndex}: BottomBarProps) => {
    const theme = useTheme();
    const styles = useStyleSheet(themedStyles);

    return (
      <HStack level="2" itemsCenter style={styles.container}>
        {DATA.map((item, i) => {
          const isActive = i === activeIndex;
          if (item === 'logo') {
            return (
              <Image
                source={Images.logo}
                key={i}
                //@ts-ignore
                style={styles.logo}
              />
            );
          } else {
            return (
              <TouchableOpacity
                onPress={() => setActiveIndex(i)}
                key={i}
                style={[styles.button, isActive && styles.active]}>
                <Icon
                  pack="assets"
                  name={item}
                  style={[
                    styles.icon,
                    {
                      tintColor: isActive
                        ? theme['background-basic-color-10']
                        : theme['color-basic-600'],
                    },
                  ]}
                />
              </TouchableOpacity>
            );
          }
        })}
      </HStack>
    );
  },
);

export default BottomBar;

const themedStyles = StyleService.create({
  container: {
    marginHorizontal: 15,
    borderRadius: 99,
  },
  active: {
    backgroundColor: 'background-basic-color-5',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 99,
  },
  icon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
});
const DATA = ['house', 'calendar', 'logo', 'timer', 'user'];
