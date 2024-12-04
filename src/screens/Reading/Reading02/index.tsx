import * as React from 'react';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  ViewPager,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, HStack} from 'components';
import TabBar from './TabBar';
import Images from 'assets/images';
import Tab from './Tab';
const Reading02 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout level="5" style={[styles.header, {paddingTop: top + 8}]}>
        <HStack>
          <NavigationAction status="transparent" />
          <NavigationAction status="transparent" />
        </HStack>
        <Text category="h2" status="white" marginLeft={16} marginBottom={4}>
          List Book
        </Text>
      </Layout>
      <TabBar
        style={styles.tabBar}
        tabs={TABS}
        activeIndex={activeTab}
        onChange={setActiveTab}
      />
      <Content contentContainerStyle={styles.content}>
        <ViewPager
          selectedIndex={activeTab}
          onSelect={setActiveTab}
          swipeEnabled={false}>
          <Tab data={DATA_TABS} />
          <Tab data={DATA_TABS.reverse()} />
          <Tab data={DATA_TABS} />
          <Tab data={DATA_TABS.reverse()} />
        </ViewPager>
      </Content>
    </Container>
  );
});

export default Reading02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 4,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  tabBar: {
    paddingHorizontal: 16,
  },
  content: {
    paddingBottom: 40,
  },
});
const TABS = [
  {icon: 'coins', title: 'Finance'},
  {icon: 'money', title: 'Future Life'},
  {icon: 'coffe', title: 'Travel'},
  {icon: 'sun', title: 'History'},
];
const DATA_TABS = [
  {
    image: Images.reading.reading01,
    title: "Are You There, God? It's Me, Margaret",
    time: '24 mins',
    type: 'free',
  },
  {
    image: Images.reading.reading02,
    title: "Are You There, God? It's Me, Margaret",
    time: '24 mins',
    type: 'free',
  },
  {
    image: Images.reading.reading03,
    title: "Are You There, God? It's Me, Margaret",
    time: '24 mins',
    type: 'free',
  },
  {
    image: Images.reading.reading04,
    title: "Are You There, God? It's Me, Margaret",
    time: '24 mins',
    type: 'free',
  },
];
