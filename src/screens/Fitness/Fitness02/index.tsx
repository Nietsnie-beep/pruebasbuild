import * as React from 'react';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, HStack} from 'components';
import Gender from './Gender';
import Images from 'assets/images';

const Fitness02 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onSelect = React.useCallback((num: number) => {
    setSelectedIndex(num);
  }, []);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={
          <Text category="h7" status="primary" uppercase marginRight={20}>
            Skip
          </Text>
        }
      />
      <Content>
        <Text category="h1" marginHorizontal={16}>
          Choose your Gender
        </Text>
        <HStack mh={32}>
          <Gender
            title={'female'}
            image={Images.fitness.female}
            isChoose={selectedIndex === 1}
            num={1}
            onPress={onSelect}
          />
          <Gender
            title="male"
            image={Images.fitness.male}
            isChoose={selectedIndex === 2}
            num={2}
            onPress={onSelect}
          />
        </HStack>
      </Content>
      <Button
        children={'Continue'}
        style={styles.button}
        accessoryRight={<Icon pack="assets" name="caret_right" />}
      />
    </Container>
  );
});

export default Fitness02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 32,
    marginBottom: 24,
  },
});
