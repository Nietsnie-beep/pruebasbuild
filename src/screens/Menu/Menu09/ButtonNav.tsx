import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import Text from 'components/Text';

interface IButtonProps {
  icon: string;
  name: string;
  notification: number;
  backgroundColor: string;
}

const Button = React.memo(
  ({button, onPress}: {button: IButtonProps; onPress?(): void}) => {
    const styles = useStyleSheet(themedStyles);

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}>
        <View style={styles.title}>
          <View
            style={[
              styles.layoutIcon,
              {backgroundColor: button.backgroundColor},
            ]}>
            <Icon pack="assets" name={button.icon} />
          </View>
          <Text category="h6" marginLeft={16} uppercase>
            {button.name}
          </Text>
        </View>
        <View style={styles.right}>
          {button.notification > 0 && (
            <View style={styles.layoutNoti}>
              <Text category="h7" uppercase>
                {button.notification > 10
                  ? button.notification
                  : `0${button.notification}`}
              </Text>
            </View>
          )}
          <Icon pack="assets" name="caret_right" style={styles.arrow} />
        </View>
      </TouchableOpacity>
    );
  },
);

export default Button;

const themedStyles = StyleService.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    alignItems: 'center',
  },
  layoutIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  layoutNoti: {
    backgroundColor: 'background-basic-color-4',
    minWidth: 32,
    minHeight: 24,
    borderRadius: 99,
    alignItems: 'center',
  },
  arrow: {
    tintColor: 'text-platinum-color',
    opacity: 0.5,
    marginLeft: 16,
    marginRight: 24
  },
});
