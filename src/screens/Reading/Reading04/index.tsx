import * as React from 'react';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
  Icon,
} from '@ui-kitten/components';
import {Container, Content, Text, NavigationAction} from 'components';
import ItemQuestion from './ItemQuestion';

const Reading04 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isContinue, setContinue] = React.useState(false);
  React.useEffect(() => {
    if (selectedIndex !== 0) {
      setContinue(false);
    } else setContinue(true);
  }, [selectedIndex]);
  const onSelect = (num: number) => {
    setSelectedIndex(num);
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="arrow_left" status="primary" />}
        accessoryRight={
          <Text
            children="Skip"
            category="callout"
            status="primary"
            marginRight={12}
          />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Text category="h1" marginBottom={40}>
          How much time per day would you like to{' '}
          <Text category="h1" status="primary">
            read book?
          </Text>
        </Text>
        <ItemQuestion
          numberBookPerWeek={4}
          minutes={30}
          isChoose={selectedIndex === 1}
          num={1}
          onPress={onSelect}
        />
        <ItemQuestion
          numberBookPerWeek={6}
          minutes={45}
          isChoose={selectedIndex === 2}
          num={2}
          onPress={onSelect}
        />
        <ItemQuestion
          numberBookPerWeek={8}
          minutes={60}
          isChoose={selectedIndex === 3}
          num={3}
          onPress={onSelect}
        />
        <ItemQuestion
          numberBookPerWeek={12}
          minutes={120}
          isChoose={selectedIndex === 4}
          num={4}
          onPress={onSelect}
        />
      </Content>
      <Button
        children="Continue"
        disabled={isContinue}
        accessoryRight={<Icon pack="assets" name="caret_right" />}
        style={[styles.continue]}
      />
    </Container>
  );
});

export default Reading04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 24,
  },
  continue: {
    marginHorizontal: 24,
    borderRadius: 16,
    marginBottom: 8,
  },
});
