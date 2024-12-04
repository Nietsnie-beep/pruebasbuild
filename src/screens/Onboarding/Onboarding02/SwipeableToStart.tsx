import * as React from 'react';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Spinner,
  Button,
} from '@ui-kitten/components';

import {Text} from 'components';
import RoundedButton from 'components/RoundedButton';
import {Swipeable, RectButton} from 'react-native-gesture-handler';

const SwipeableToStart = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [active, setActive] = React.useState(false);
  const [start, setStart] = React.useState(false);
  return (
    <>
      {!start ? (
        <>
          <Text
            category="h6"
            status="primary"
            center
            style={{
              position: 'absolute',
              alignSelf: 'center',
              top: 16,
              bottom: 16,
            }}>
            Swipe to start
          </Text>
          {!active ? (
            <Swipeable
              containerStyle={{
                width: width - 80,
                borderRadius: 12,
                backgroundColor: '#5784E840',
                justifyContent: 'center',
              }}
              overshootLeft={false}
              onSwipeableOpen={() => {
                setActive(true);
                setTimeout(() => {
                  setStart(true);
                }, 1000);
              }}
              onSwipeableClose={() => {
                setActive(false);
              }}
              renderLeftActions={(progress, dragX) => {
                return (
                  <RectButton onPress={() => {}} activeOpacity={1}>
                    <Animated.View
                      style={{
                        width: width - 80 - 56,
                      }}
                    />
                  </RectButton>
                );
              }}>
              <RoundedButton
                status="basic"
                icon="arrow_right"
                activeOpacity={1}
              />
            </Swipeable>
          ) : (
            <Spinner />
          )}
        </>
      ) : (
        <Button
          children={'Get Start'}
          style={styles.buttonStart}
          onPress={goBack}
        />
      )}
    </>
  );
});

export default SwipeableToStart;

const themedStyles = StyleService.create({
  buttonStart: {
    flex: 1,
    marginHorizontal: 40,
  },
});
