import * as React from 'react';
import {Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  ViewPager,
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
import TabBar from './TabBar';
import Tab from './Tab';

const Fitness10 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="5">
        <TopNavigation
          title={() => (
            <Text category="h7" status="white">
              History
            </Text>
          )}
          accessoryLeft={<NavigationAction />}
          appearance="control"
        />
        <HStack mb={24} mh={24} itemsCenter>
          <VStack>
            <Text category="subhead" status="white">
              Total Distance
            </Text>
            <Text category="h1" status="white">
              64.8
              <Text status="white" category="body">
                Km
              </Text>
            </Text>
          </VStack>
          <Image source={Images.fitness.star} />
        </HStack>
      </Layout>
      <TabBar
        tabs={TAB}
        tabActive={activeIndex}
        onChangeTab={setActiveIndex}
        backgroundTabActive={theme['background-basic-color-5']}
        backgroundTab={theme['background-basic-color-2']}
        style={styles.tab}
      />
      <Content>
        <ViewPager onSelect={setActiveIndex} selectedIndex={activeIndex}>
          <Tab data={DATA_WEEK} />
          <Layout>
            <Text>Tab Year</Text>
          </Layout>
          <Tab data={DATA_MONTH} />
        </ViewPager>
      </Content>
    </Container>
  );
});

export default Fitness10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  tab: {
    margin: 24,
  },
});

const TAB = ['Week', 'Year', 'Month'];
const DATA_WEEK = [
  {date: '20/12/2022', time: '2:10:25', km: 2.56},
  {date: '21/12/2022', time: '2:10:25', km: 2.56},
  {date: '22/12/2022', time: '2:10:25', km: 2.56},
  {date: '23/12/2022', time: '2:10:25', km: 2.56},
  {date: '24/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
];
const DATA_MONTH = [
  {date: '20/12/2022', time: '2:10:25', km: 2.56},
  {date: '21/12/2022', time: '2:10:25', km: 2.56},
  {date: '22/12/2022', time: '2:10:25', km: 2.56},
  {date: '23/12/2022', time: '2:10:25', km: 2.56},
  {date: '24/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
  {date: '25/12/2022', time: '2:10:25', km: 2.56},
];
