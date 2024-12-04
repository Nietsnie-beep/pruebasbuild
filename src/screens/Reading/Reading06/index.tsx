import * as React from 'react';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  ViewPager,
} from '@ui-kitten/components';

import {Container, Content, NavigationAction} from 'components';
import TabBar from './TabBar';
import Images from 'assets/images';
import TabBook from './TabBook';
import BottomTab from './BottomTab';

const Reading06 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Bookmark'}
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={<NavigationAction icon="bell_ring" status="primary" />}
      />
      <TabBar
        style={styles.tabBar}
        tabActive={activeIndex}
        onChangeTab={setActiveIndex}
        tabs={['Voice Book', 'Ebook']}
        backgroundTabActive={theme['background-basic-color-5']}
        backgroundTab={theme['background-basic-color-3']}
      />
      <Content contentContainerStyle={styles.content}>
        <ViewPager selectedIndex={activeIndex} onSelect={setActiveIndex}>
          <TabBook data={DATA_TAB_01} />
          <TabBook data={DATA_TAB_02} />
        </ViewPager>
      </Content>
      <BottomTab/>
    </Container>
  );
});

export default Reading06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  tabBar: {
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 8,
  },
  content: {
    paddingBottom: 40,
  },
});

const DATA_TAB_01 = [
  {
    title: 'Finance Personal',
    list_book: [
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.reading06,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.reading07,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.reading05,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.reading03,
      },
      {
        name: 'Rebecca ',
        image: Images.reading.ebook01,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook02,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook03,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook04,
      },
    ],
  },
  {
    title: 'Future Life',
    list_book: [
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook01,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook02,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook03,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook04,
      },
    ],
  },
  {
    title: 'Travel',
    list_book: [
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook05,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook06,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook07,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook08,
      },
    ],
  },
];
const DATA_TAB_02 = [
  {
    title: 'Finance Personal',
    list_book: [
      {
        name: 'Rebecca ',
        image: Images.reading.ebook01,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook02,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook03,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook04,
      },
    ],
  },
  {
    title: 'Future Life',
    list_book: [
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook01,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook02,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook03,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook04,
      },
    ],
  },
  {
    title: 'Travel',
    list_book: [
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook05,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook06,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook07,
      },
      {
        name: 'Rebecca of Sunnybrook Farm',
        image: Images.reading.ebook08,
      },
    ],
  },
];
