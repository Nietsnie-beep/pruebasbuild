import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Input,
} from '@ui-kitten/components';

import {Container, Content, Text, HStack, VStack, IDivider} from 'components';
import Images from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import {Status_Types_Enum} from 'constants/Type';
import PersonItem from '../elements/PersonItem';
import dayjs from 'utils/dayjs';
import useToggle from 'hooks/useToggle';
import {useNavigation} from '@react-navigation/native';

const Social03 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const {goBack} = useNavigation();
  const [liked, toggle] = useToggle(data.liked);

  const width_img = 295 * (width / 375);
  const height_img = 392 * (height / 812);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Content contentContainerStyle={{paddingTop: top + 8}}>
        <Carousel
          data={data.images}
          width={width}
          height={height_img}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 60,
          }}
          renderItem={({item}) => {
            return (
              <Image
                source={item}
                borderRadius={16}
                style={{width: width_img, height: height_img, marginLeft: 40}}
              />
            );
          }}
        />
        <View>
          <VStack mh={16}>
            <HStack padding={4}>
              <PersonItem data={data.user} />
              <Text status="snow">{dayjs(data.create_at).format('hh:mm')}</Text>
            </HStack>
            <Text category="body" marginVertical={16}>
              {data.title}
            </Text>
            <IDivider />
          </VStack>
          <HStack mh={16} pv={16}>
            <HStack justify="flex-start">
              <HStack mr={32} onPress={toggle}>
                <Icon
                  pack="assets"
                  name="heart"
                  style={[
                    styles.heart,
                    liked && {tintColor: theme['color-danger-100']},
                  ]}
                />
                <Text category="h7" marginLeft={8} status="snow">
                  {data.like_number}
                </Text>
              </HStack>
              <HStack>
                <Icon pack="assets" name="chat" />
                <Text category="h7" marginLeft={8} status="snow">
                  {data.comment_number}
                </Text>
              </HStack>
            </HStack>
            <TouchableOpacity>
              <Icon pack="assets" name="bookmark" />
            </TouchableOpacity>
          </HStack>
          <IDivider />
        </View>
        <HStack justify="flex-start" mt={12} mb={20} ml={16}>
          {Emoji.map((item, i) => {
            return (
              <TouchableOpacity key={i}>
                <Text category="h7">{item} </Text>
              </TouchableOpacity>
            );
          })}
          <Text category="h7" status="snow">
            You and 138 others
          </Text>
        </HStack>
      </Content>
      <Layout level="8" style={{paddingBottom: bottom + 16, ...styles.layout}}>
        <Input style={styles.input} placeholder="Type something..." />
        <TouchableOpacity onPress={goBack}>
          <Icon pack="assets" name="image" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack} style={{marginHorizontal: 16}}>
          <Icon pack="assets" name="smiley" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack}>
          <Icon pack="assets" name="menu" style={styles.icon} />
        </TouchableOpacity>
      </Layout>
    </Container>
  );
});

export default Social03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  status: {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: 'text-white-color',
    borderRadius: 99,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  heart: {
    width: 20,
    height: 20,
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    flex: 1,
  },
  layout: {
    paddingTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    tintColor: '#8247E5',
    width: 20,
    height: 20,
  },
});
const data = {
  title:
    'Non-fungible tokens (NFTs) seem to have exploded out of the ether this year.',
  user: {
    id: '1',
    name: 'Christine Stewart',
    avatar: Images.avatar.avatar,
    status: Status_Types_Enum.Online,
    sub_title: 'NFT',
  },
  like_number: 124,
  comment_number: 24,
  commented: false,
  liked: false,
  bookmark: false,
  create_at: '2022-12-05T07:41:01.968Z',
  images: [
    Images.social.photo01,
    Images.social.photo02,
    Images.social.photo03,
    Images.social.photo04,
  ],
};
const Emoji = ['😛', '😍', '😂', '😀'];
