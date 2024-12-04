import * as React from 'react';
import {View, Image, TouchableOpacity, ImageRequireSource} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Avatar,
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
import dayjs from 'utils/dayjs';

interface IMessegeProps {
  id: number;
  name: string;
  avatar: any;
  lastSeen: number;
  mess: string;
  image?: ImageRequireSource;
}

const Social07 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [index, setIndex] = React.useState(0);

  const RenderItem = React.useCallback(({item}: {item: IMessegeProps}) => {
    return (
      <View style={styles.item}>
        <HStack>
          <TouchableOpacity activeOpacity={0.7} style={styles.avatar}>
            <View>
              <Avatar size="giant" source={item.avatar} />
              <Layout style={styles.iconOnl} />
            </View>
          </TouchableOpacity>
          <View>
            <View style={[styles.flexRow, {width: width - 116}]}>
              <Text marginLeft={12} category="callout" children={item.name} />
              <Text category="subhead" status="placeholder">
                {dayjs(item.lastSeen).format('DD/MM/YYYY')}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              maxWidth={width / 1.6}
              marginLeft={12}
              marginTop={8}
              category="subhead">
              {item.mess}
            </Text>
          </View>
        </HStack>

        {item.image ? (
          <Image
            source={item.image}
            /* @ts-ignore */
            style={styles.image}
          />
        ) : undefined}
      </View>
    );
  }, []);

  return (
    <Container style={styles.container}>
      <HStack mh={16} itemsCenter>
        <Text category="h6">Messenger</Text>
        <HStack itemsCenter>
          <NavigationAction icon="search" status="primary" />
          <NavigationAction icon="pencil" status="primary"  />
        </HStack>
      </HStack>
      <Content>
        <Content horizontal contentContainerStyle={{marginTop:12,marginLeft:8}}>
          <NavigationAction icon="star"  style={styles.avatar} />
          {DATA.map((item, i) => {
            return (
              <VStack ml={24} key={i}>
                {item.message > 0 && (
                  <VStack style={styles.message} level="5" itemsCenter>
                    <Text category="h7" status="white">
                      {item.message}
                    </Text>
                  </VStack>
                )}
                <Avatar source={item.user.avatar} size="giant" />
              </VStack>
            );
          })}
        </Content>
        <TabBar
          unreadData={'16'}
          tabs={['Active', 'Unread']}
          tabActive={index}
          onChangeTab={setIndex}
          backgroundTab={theme['background-basic-color-2']}
          backgroundTabActive={theme['color-primary-100']}
          style={styles.tabBar}
        />
        <ViewPager
          style={styles.tabContainer}
          selectedIndex={index}
          onSelect={i => setIndex(i)}>
          <View style={{flex: 1}}>
            {DATA_Contact &&
              DATA_Contact.map((item, i) => {
                return <RenderItem item={item} key={i} />;
              })}
          </View>
        </ViewPager>
      </Content>
    </Container>
  );
});

export default Social07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconOnl: {
    backgroundColor: 'background-basic-color-4',
    height: 16,
    width: 16,
    borderRadius: 99,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: 'background-basic-color-1',
    borderWidth: 2,
  },
  message: {
    position: 'absolute',
    zIndex: 100,
    width: 28,
    height: 28,
    borderRadius: 99,
    justifyContent: 'center',
    right: -12,
    top: 0,
  },
  avatar: {
    width: 56,
    height: 56,
  },
  tabContainer: {
    paddingTop: 24,
  },
  tabBar: {
    marginHorizontal: 24,
    marginBottom: 8,
  },
  content: {
    flex: 1,
  },
  item: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  image: {
    marginTop: 24,
    width: '100%',
    borderRadius: 16,
  },
});
const DATA = [
  {
    message: 3,
    user: {
      avatar: Images.avatar.avatar01,
    },
  },
  {
    message: 0,
    user: {
      avatar: Images.avatar.avatar02,
    },
  },
  {
    message: 0,
    user: {
      avatar: Images.avatar.avatar03,
    },
  },
  {
    message: 0,
    user: {
      avatar: Images.avatar.avatar04,
    },
  },
  {
    message: 0,
    user: {
      avatar: Images.avatar.avatar05,
    },
  },
  {
    message: 0,
    user: {
      avatar: Images.avatar.avatar06,
    },
  },
];
const DATA_Contact = [
  {
    id: 0,
    name: 'Christine Stewart',
    avatar: Images.avatar.avatar02,
    lastSeen: 1630986664000,
    image: Images.rectangle.rectangle_03,
    mess: "What's the secret to a successful, tell me?",
  },
  {
    id: 1,
    name: 'Marion Daniels',
    avatar: Images.avatar.avatar03,
    lastSeen: 1630986664000,
    mess: "What's the secret to a successful, tell me?",
  },
  {
    id: 2,
    name: 'Walter Turner',
    avatar: Images.avatar.avatar04,
    lastSeen: 1630986664000,
    mess: "What's the secret to a successful, tell me?",
  },
  {
    id: 3,
    name: 'Willie Harvey',
    avatar: Images.avatar.avatar05,
    lastSeen: 1630986664000,
    mess: "What's the secret to a successful, tell me?",
  },
  {
    id: 4,
    name: 'Willie Harvey',
    avatar: Images.avatar.avatar06,
    lastSeen: 1630986664000,
    mess: "What's the secret to a successful, tell me?",
  },
];
