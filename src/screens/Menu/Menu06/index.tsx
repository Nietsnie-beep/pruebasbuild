import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import Images from 'assets/images';

const Menu06 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryRight={<NavigationAction icon="arrow_right" size="giant" />}
        accessoryLeft={<Image source={Images.logo} />}
      />
      <Content contentContainerStyle={styles.content}>
        <Avatar
          source={Images.avatar.avatar10}
          size="large"
          //@ts-ignore
          style={styles.avatar}
        />
        <VStack style={{flexGrow: 1}}>
          <View>
            {BUTTON.map((item, i) => {
              return (
                <TouchableOpacity key={i}>
                  <Text category="h3" marginLeft={24} marginTop={24}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View>
            <Text category="h3" marginLeft={24} marginBottom={16}>
              Categories
            </Text>
            <Content style={styles.contentCategories} horizontal>
              {DATA.map((item, i) => {
                return (
                  <VStack
                    padding={20}
                    border={8}
                    style={{
                      backgroundColor: item.color,
                      width: 138 * (width / 375),
                      height: 152 * (height / 812),
                    }}
                    key={i}
                    mr={4}>
                    <Icon pack="assets" name={item.icon} style={styles.icon} />
                    <Text category="h7" status="white" numberOfLines={1}>
                      {item.name}
                    </Text>
                  </VStack>
                );
              })}
            </Content>
          </View>
        </VStack>
      </Content>
    </Container>
  );
});

export default Menu06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingLeft: 16,
  },
  avatar: {
    marginLeft: 24,
    marginTop: 40,
  },
  content: {
    flexGrow: 1,
  },
  contentCategories: {
    paddingLeft: 24,
    paddingBottom: 24,
  },
  icon: {
    transform: [{scale: 1.4}],
  },
});
const BUTTON = [
  {title: 'Home'},
  {title: 'About Us'},
  {title: 'Contact Us'},
  {title: 'Blogs'},
];
const DATA = [
  {icon: 'onboarding', name: 'Onboarding', color: '#0084F4'},
  {icon: 'auth', name: 'Authentication', color: '#00C48C'},
  {icon: 'social', name: 'Social', color: '#FFA26B'},
  {icon: 'profile', name: 'Profiles', color: '#FF647C'},
  {icon: 'food_delivery', name: 'Food Delivery', color: '#FFCF5C'},
  {icon: 'finance', name: 'Finance', color: '#4B66EA'},
  {icon: 'commerce', name: 'E-Commerce', color: '#20487D'},
  {icon: 'book', name: 'Booking', color: '#FFA26B'},
];
