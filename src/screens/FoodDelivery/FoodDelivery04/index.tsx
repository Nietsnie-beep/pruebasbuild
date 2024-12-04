import * as React from 'react';
import {ImageRequireSource} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import TitleHeader from '../FoodDelivery01/TitleHeaer';
import Images from 'assets/images';
import FBCollage from 'react-native-fb-collage';

const FoodDelivery04 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const List = ({data}: {data: ImageRequireSource[]}) => {
    return (
      <VStack>
        <FBCollage
          images={data}
          width={width - 72}
          height={266 * (height / 812)}
          resizeMode="cover"
        />
      </VStack>
    );
  };

  return (
    <Container style={styles.container} useSafeArea={false} level="2">
      <VStack level="1" style={[{paddingTop: top + 4}, styles.header]}>
        <TopNavigation
          style={styles.topNavigation}
          accessoryLeft={<NavigationAction status="primary" />}
          accessoryRight={<NavigationAction icon="search" status="primary" />}
        />
        <Text category="h3" marginLeft={16} marginBottom={8}>
          Restaurant
        </Text>
      </VStack>
      <Content contentContainerStyle={styles.content}>
        <VStack level="1" mt={24} mh={24} border={16}>
          <TitleHeader title="Donus" />
          <List data={DATA} />
        </VStack>
        <VStack level="1" mt={24} mh={24} border={16}>
          <TitleHeader title="Donus" />
          <List data={DATA} />
        </VStack>
      </Content>
    </Container>
  );
});

export default FoodDelivery04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  topNavigation: {},
  content: {
    paddingBottom: 60,
  },
});

const DATA = [
  Images.social.photo01,
  Images.social.photo02,
  Images.social.photo03,
  Images.social.photo04,
  Images.social.photo04,
  Images.social.photo04,
  Images.social.photo04,
  Images.social.photo04,
];
