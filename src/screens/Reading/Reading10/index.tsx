import * as React from 'react';
import {Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  ViewPager,
  Icon,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  HStack,
  VStack,
} from 'components';
import Images from 'assets/images';
import TabBar from '../Reading02/TabBar';
import Book from './Book';

const Reading10 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setActiveTab] = React.useState(0);
  const width_item = (width - 47) / 2;

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.header}
        accessoryLeft={<NavigationAction icon="search" status="primary" />}
        accessoryRight={<Avatar source={Images.avatar.avatar02} size="small" />}
      />
      <TabBar
        style={styles.tabBar}
        tabs={TABS}
        activeIndex={activeTab}
        onChange={setActiveTab}
      />
      <Content contentContainerStyle={styles.contentPage}>
        <Content contentContainerStyle={styles.content}>
          <ViewPager
            selectedIndex={activeTab}
            onSelect={setActiveTab}
            swipeEnabled={false}>
            <Layout>
              <Book item={book} />
              <HStack wrap mt={24}>
                {DATA_TABS.map((item, i) => {
                  return (
                    <VStack key={i} style={[{width: width_item}]} mb={16}>
                      <Image source={item.image} />
                      <Layout level="12" style={styles.tag}>
                        <Text status="white" uppercase category="s2">
                          {item.type}
                        </Text>
                      </Layout>
                      <Text category="h7" marginBottom={8}>
                        {item.title}
                      </Text>
                      <HStack itemsCenter>
                        <Text category="subhead">{item.time}</Text>
                        <Icon
                          pack="assets"
                          name="bookmark"
                          style={styles.bookmark}
                        />
                      </HStack>
                    </VStack>
                  );
                })}
              </HStack>
            </Layout>
            <Layout>
              <Text>Future Life</Text>
            </Layout>
            <Layout>
              <Text>Travel</Text>
            </Layout>
            <Layout>
              <Text>History</Text>
            </Layout>
          </ViewPager>
        </Content>
      </Content>
    </Container>
  );
});

export default Reading10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  header: {
    paddingRight: 20,
  },
  tabBar: {
    paddingHorizontal: 16,
  },
  content: {
    paddingBottom: 40,
  },
  contentPage: {
    marginHorizontal: 16,
  },
  tag: {
    borderRadius: 99,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  bookmark: {
    tintColor: 'text-secondary-color',
    width: 16,
    height: 16,
  },
});
const TABS = [
  {icon: 'coins', title: 'Finance'},
  {icon: 'money', title: 'Future Life'},
  {icon: 'coffe', title: 'Travel'},
  {icon: 'sun', title: 'History'},
];
const book = {
  title: 'The Girl with the Dragon Tattoo House',
  image: Images.reading.ebook04,
  artist: 'June Cook',
  duration: '48 mins',
};
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
