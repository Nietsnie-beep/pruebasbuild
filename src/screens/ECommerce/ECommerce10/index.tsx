import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Input,
  Icon,
} from '@ui-kitten/components';
import {Container, Content, Text, VStack, HStack} from 'components';
import Images from 'assets/images';
import TabBar from './TabBar';
import { useNavigation } from '@react-navigation/native';

const ECommerce10 = React.memo(() => {
  const {goBack}=useNavigation()
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <Input
            style={styles.input}
            placeholder="Enter something…"
            accessoryLeft={<Icon pack="assets" name="search" />}
          />
        }
      />
      <TabBar
        tabs={DATA_TABS}
        style={styles.tabBar}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
      <Content>
        {DATA.map((item, i) => {
          return (
            <VStack key={i} mb={36} mh={16}>
              <Image
                source={item.image}
                style={{
                  width: width - 32,
                  height: width - 32,
                  borderRadius: 12,
                }}
              />
              <HStack mt={20}>
                <VStack>
                  <Text category="h3" marginBottom={8}>
                    {item.title}
                  </Text>
                  <Text category="h6" status="primary">
                    {item.price}
                  </Text>
                </VStack>
                <TouchableOpacity style={styles.bagButton} onPress={goBack}>
                  <Icon pack="assets" name="bag_simple" style={styles.bag} />
                </TouchableOpacity>
              </HStack>
            </VStack>
          );
        })}
      </Content>
    </Container>
  );
});

export default ECommerce10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  input: {
    flex: 1,
  },
  tabBar: {
    margin: 16,
  },
  bagButton: {
    width: 64,
    height: 64,
    backgroundColor: 'background-basic-color-5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
  },
  bag: {
    tintColor: 'text-white-color',
  },
});
const DATA_TABS = [
  {id: 0, title: 'Hambergur', icon: Images.e_commerce.buger},
  {id: 1, title: 'Donut', icon: Images.e_commerce.donut},
  {id: 2, title: 'Pizza', icon: Images.e_commerce.pizza},
];
const DATA = [
  {title: 'Hambergur S', image: Images.social.person01, price: '$14.25'},
  {title: 'Hambergur SS', image: Images.social.person02, price: '$14.25'},
  {title: 'Hambergur S', image: Images.social.person03, price: '$14.25'},
  {title: 'Hambergur S', image: Images.social.person04, price: '$14.25'},
];
